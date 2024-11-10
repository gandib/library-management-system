-- DropForeignKey
ALTER TABLE "borrowRecords" DROP CONSTRAINT "borrowRecords_memberId_fkey";

-- AddForeignKey
ALTER TABLE "borrowRecords" ADD CONSTRAINT "borrowRecords_memberId_fkey" FOREIGN KEY ("memberId") REFERENCES "members"("memberId") ON DELETE RESTRICT ON UPDATE CASCADE;
