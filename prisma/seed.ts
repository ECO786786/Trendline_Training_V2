import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { courses } from "../data/courses.ts";
import { courseDetails } from "../data/courseDetails.ts";

export async function seed(prisma: PrismaClient) {
  // Always create the admin user, even in production
  console.log("Seeding admin user...");
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

  if (process.env.NODE_ENV === "production") {
    console.log("Production environment detected. Skipping other hardcoded users.");
  } else {
    console.log("Seeding development users...");
    
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
  await prisma.scheduledCourse.deleteMany(); 
  await prisma.registration.deleteMany(); 
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

  // Seed Scheduled Courses (2026 Timetable)

  const mkDate = (month: number, day: number) => new Date(2026, month - 1, day);
  
  const schedule = [
    { slug: "data-analytics-fundamentals", start: mkDate(2, 9), days: 3 },
    { slug: "financial-modelling-and-forecasting", start: mkDate(2, 16), days: 5 },
    { slug: "financial-analysis-power-bi", start: mkDate(3, 23), days: 5 },
    { slug: "analytics-dax-creation-capstone-dashboard-clinic", start: mkDate(4, 13), days: 5 },
    { slug: "data-governance-reporting-standards", start: mkDate(5, 26), days: 3 },
    { slug: "advanced-data-analytics-ai", start: mkDate(6, 8), days: 5 },
    { slug: "executive-strategic-data-analysis", start: mkDate(6, 18), days: 3 }, 
    { slug: "budgeting-planning-variance-analysis", start: mkDate(7, 27), days: 3 },
    { slug: "sql-for-data-analysis", start: mkDate(9, 7), days: 5 },
  ];


  for (const session of schedule) {
    const course = await prisma.course.findUnique({ where: { slug: session.slug } });
    if (course) {
        const endDate = new Date(session.start);
        endDate.setDate(endDate.getDate() + session.days);
        
        await prisma.scheduledCourse.create({
            data: {
                courseId: course.id,
                startDate: session.start,
                endDate: endDate,
                location: "Mika Convention Center, Lusaka"
            }
        });
    } else {
        console.warn(`Skipping schedule for unknown slug: ${session.slug}`);
    }
  }
}

async function main() {
  const prisma = new PrismaClient();
  try {
    await seed(prisma);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
