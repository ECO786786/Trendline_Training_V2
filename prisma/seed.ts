
import { PrismaClient } from '@prisma/client'
import { courses } from '../data/courses'
import { courseDetails } from '../data/courseDetails'

const prisma = new PrismaClient()

async function main() {
  const bcrypt = require('bcryptjs');
  const hashedPassword = await bcrypt.hash('password123', 10);
  
  await prisma.user.upsert({
      where: { email: 'admin@trendline.com' },
      update: {},
      create: {
          email: 'admin@trendline.com',
          name: 'Trendline Admin',
          password: hashedPassword,
          role: 'ADMIN'
      }
  });
 
  await prisma.learningOutcome.deleteMany()
  await prisma.curriculumItem.deleteMany()
  // await prisma.registration.deleteMany() // Optional: keep registrations?
  // await prisma.inquiry.deleteMany() // Optional: keep inquiries?
  await prisma.course.deleteMany()

  // Iterate over courseDetails as the primary source
  for (const detail of courseDetails) {
    // Find matching landing page data (if any) to get image
    // Matching logic: Try to match by ID or similar title
    const landingData = courses.find(c => c.id === detail.id) || courses.find(c => c.title === detail.title)


    await prisma.course.create({
      data: {
        slug: detail.slug,
        title: detail.title,
        subTitle: detail.subTitle,
        description: landingData?.description || detail.subTitle || "", // Use landing desc or subtitle
        category: landingData?.category || "General",
        duration: detail.duration,
        level: detail.level,
        priceZM: detail.prices.ZM.amount,
        priceUS: detail.prices.US.amount,
        overview: detail.overview,
        prerequisites: detail.prerequisites,
        certificate: detail.certificate,
        imageSrc: landingData?.imageSrc || "/images/placeholder.jpg",
        imageAlt: landingData?.imageAlt || detail.title,
        
        learningOutcomes: {
          create: detail.learningOutcomes.map(outcome => ({
            description: outcome
          }))
        },
        curriculum: {
          create: detail.curriculum.map(item => ({
            title: item.title,
            description: item.description
          }))
        }
      }
    })
  }

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
