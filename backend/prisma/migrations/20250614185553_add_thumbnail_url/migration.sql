/*
  Warnings:

  - Added the required column `thumbnailUrl` to the `CoachExercise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnailUrl` to the `GlobalExercise` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CoachExercise" ADD COLUMN     "thumbnailUrl" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/150';

-- AlterTable
ALTER TABLE "GlobalExercise" ADD COLUMN     "thumbnailUrl" TEXT NOT NULL DEFAULT 'https://via.placeholder.com/150';

-- Remove the default value constraints
ALTER TABLE "GlobalExercise" ALTER COLUMN "thumbnailUrl" DROP DEFAULT;
ALTER TABLE "CoachExercise" ALTER COLUMN "thumbnailUrl" DROP DEFAULT;
