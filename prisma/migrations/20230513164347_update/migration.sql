-- AlterTable
ALTER TABLE `User` MODIFY `education` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `status` ENUM('accepted', 'declined', 'pending') NOT NULL DEFAULT 'pending',
    MODIFY `password` VARCHAR(191) NOT NULL DEFAULT '';
