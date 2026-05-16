/*
  Warnings:

  - Added the required column `surname` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Participant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `participant` DROP FOREIGN KEY `Participant_tournamentId_fkey`;

-- DropIndex
DROP INDEX `Participant_tournamentId_fkey` ON `participant`;

-- AlterTable
ALTER TABLE `participant` ADD COLUMN `surname` VARCHAR(191) NOT NULL,
    ADD COLUMN `teamId` INTEGER NOT NULL,
    MODIFY `tournamentId` INTEGER NULL;

-- AlterTable
ALTER TABLE `tournament` ADD COLUMN `date` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `Teams` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TournamentTeam` (
    `tournamentId` INTEGER NOT NULL,
    `teamId` INTEGER NOT NULL,

    PRIMARY KEY (`tournamentId`, `teamId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Participant` ADD CONSTRAINT `Participant_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Teams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TournamentTeam` ADD CONSTRAINT `TournamentTeam_tournamentId_fkey` FOREIGN KEY (`tournamentId`) REFERENCES `Tournament`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `TournamentTeam` ADD CONSTRAINT `TournamentTeam_teamId_fkey` FOREIGN KEY (`teamId`) REFERENCES `Teams`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
