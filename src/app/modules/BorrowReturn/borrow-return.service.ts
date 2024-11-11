import { BorrowRecord } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBorrow = async (payload: BorrowRecord) => {
  const result = await prisma.borrowRecord.create({
    data: payload,
    select: {
      borrowId: true,
      bookId: true,
      memberId: true,
      borrowDate: true,
    },
  });

  return result;
};

const createReturn = async () => {
  console.log("return");
};

export const borrowReturnServices = {
  createBorrow,
  createReturn,
};
