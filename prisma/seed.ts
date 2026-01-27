import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { courses } from "../data/courses.ts";
import { courseDetails } from "../data/courseDetails.ts";

const prisma = new PrismaClient();

async function main(): Promise<void> {
  if (process.env.NODE_ENV === "production") {
    console.log("Production environment detected. Skipping hardcoded user seeding.");
  } else {
    console.log("Seeding development users...");
    const adminPassword = await bcrypt.hash("password123", 10);
    await prisma.user.upsert({
      where: { email: "admin@trendline.com" },
      update: {},
      create: {
        email: "admin@trendline.com",
        name: "Trendline Admin",
        password: adminPassword,
        role: "ADMIN",
      },
    });

    const devPassword = await bcrypt.hash("devpass456", 10);
    await prisma.user.upsert({
      where: { email: "dev@trendline.com" },
      update: {},
      create: {
        email: "dev@trendline.com",
        name: "Developer",
        password: devPassword,
        role: "DEVELOPER",
      },
    });

    const marketing1Password = await bcrypt.hash("marketingpass1", 10);
    await prisma.user.upsert({
      where: { email: "marketing1@trendline.com" },
      update: {},
      create: {
        email: "marketing1@trendline.com",
        name: "Marketing One",
        password: marketing1Password,
        role: "MARKETING",
      },
    });

    const marketing2Password = await bcrypt.hash("marketingpass2", 10);
    await prisma.user.upsert({
      where: { email: "marketing2@trendline.com" },
      update: {},
      create: {
        email: "marketing2@trendline.com",
        name: "Marketing Two",
        password: marketing2Password,
        role: "MARKETING",
      },
    });
  }

  await prisma.learningOutcome.deleteMany();
  await prisma.curriculumItem.deleteMany();
  // await prisma.registration.deleteMany() // Optional: keep registrations?
  // await prisma.inquiry.deleteMany() // Optional: keep inquiries?
  await prisma.course.deleteMany();

  for (const detail of courseDetails) {
    const landingData =
      courses.find((c) => c.id === detail.id) ||
      courses.find((c) => c.title === detail.title);

    let level: "BEGINNER" | "INTERMEDIATE" | "ADVANCED" | "ALL_LEVELS" = "BEGINNER";
    if (detail.level === "Intermediate") level = "INTERMEDIATE";
    if (detail.level === "Advanced") level = "ADVANCED";
    if (detail.level === "All Levels") level = "ALL_LEVELS";

    await prisma.course.create({
      data: {
        slug: detail.slug,
        title: detail.title,
        subTitle: detail.subTitle,
        description: landingData?.description || detail.subTitle || "",
        category: landingData?.category || "General",
        duration: detail.duration,
        level: level,
        priceZM: detail.prices.ZM.amount,
        priceUS: detail.prices.US.amount,
        overview: detail.overview,
        prerequisites: detail.prerequisites,
        certificate: detail.certificate,
        imageSrc: landingData?.imageSrc || "/images/placeholder.jpg",
        imageAlt: landingData?.imageAlt || detail.title,
        learningOutcomes: {
          create: detail.learningOutcomes.map((outcome: string) => ({
            description: outcome,
          })),
        },
        curriculum: {
          create: detail.curriculum.map(
            (item: { title: string; description: string }) => ({
              title: item.title,
              description: item.description,
            }),
          ),
        },
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e: Error) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
