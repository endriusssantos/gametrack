/*
  Warnings:

  - A unique constraint covering the columns `[rawg_id]` on the table `games` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rawg_id` to the `games` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "games" ADD COLUMN     "rawg_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "games_rawg_id_key" ON "games"("rawg_id");
