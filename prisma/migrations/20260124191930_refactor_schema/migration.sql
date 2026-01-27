/*
  Warnings:

  - You are about to alter the column `level` on the `Course` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.
  - You are about to alter the column `type` on the `Inquiry` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(3))`.
  - You are about to alter the column `deliveryMethod` on the `Registration` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to alter the column `role` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(4))`.

*/
-- AlterTable
ALTER TABLE `Course` MODIFY `description` TEXT NULL,
    MODIFY `level` ENUM('BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'ALL_LEVELS') NOT NULL,
    MODIFY `priceZM` DECIMAL(10, 2) NOT NULL,
    MODIFY `priceUS` DECIMAL(10, 2) NOT NULL,
    MODIFY `prerequisites` TEXT NULL,
    MODIFY `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `CurriculumItem` MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `Inquiry` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `type` ENUM('GENERAL', 'CORPORATE') NOT NULL,
    MODIFY `message` TEXT NULL;

-- AlterTable
ALTER TABLE `Registration` ADD COLUMN `scheduledCourseId` INTEGER NULL,
    ADD COLUMN `type` ENUM('BOOKING', 'INTEREST') NOT NULL DEFAULT 'BOOKING',
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `deliveryMethod` ENUM('IN_PERSON', 'ONLINE_LIVE', 'HYBRID') NOT NULL;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `role` ENUM('USER', 'ADMIN', 'DEVELOPER', 'MARKETING') NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE `ScheduledCourse` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseId` INTEGER NOT NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `location` VARCHAR(191) NOT NULL DEFAULT 'Mika Convention Center, Lusaka',
    `maxAttendees` INTEGER NOT NULL DEFAULT 20,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ScheduledCourse` ADD CONSTRAINT `ScheduledCourse_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `Course`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Registration` ADD CONSTRAINT `Registration_scheduledCourseId_fkey` FOREIGN KEY (`scheduledCourseId`) REFERENCES `ScheduledCourse`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
