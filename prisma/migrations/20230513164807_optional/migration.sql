-- AlterTable
ALTER TABLE `User` MODIFY `education` VARCHAR(191) NULL DEFAULT '',
    MODIFY `status` ENUM('accepted', 'declined', 'pending') NULL DEFAULT 'pending',
    MODIFY `password` VARCHAR(191) NULL DEFAULT '';
