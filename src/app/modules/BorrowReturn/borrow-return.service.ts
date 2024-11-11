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

const createReturn = async (payload: { borrowId: string }) => {
  const date = new Date();
  const isoString = date.toISOString();
  const result = await prisma.borrowRecord.update({
    where: {
      borrowId: payload.borrowId,
    },
    data: {
      returnDate: isoString,
    },
  });
  return result;
};

const overdueBorrowList = async () => {
  const result = await prisma.borrowRecord.findMany({
    include: {
      book: true,
      member: true,
    },
  });

  const overdueData = result
    .map((data) => {
      const borrowDate: unknown = data.borrowDate;
      const borrowDateInMS = Date.parse(borrowDate as string);

      // check overdues
      if (
        86400000 * 14 < Date.now() - borrowDateInMS &&
        data?.returnDate === null
      ) {
        return {
          borrowId: data.borrowId,
          bookTitle: data.book.title,
          borrowerName: data.member.name,
          overdueDays: Number(
            `${Math.round(
              (Date.now() - borrowDateInMS - 86400000 * 14) / 86400000
            )}`
          ),
        };
      }

      return null;
    })
    .filter((item) => item !== null);

  return overdueData;
};

export const borrowReturnServices = {
  createBorrow,
  createReturn,
  overdueBorrowList,
};
