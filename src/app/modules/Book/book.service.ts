import { Book } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createBook = async (payload: Book) => {
  const result = await prisma.book.create({
    data: payload,
  });

  return result;
};

const getAllBooks = async () => {
  const result = await prisma.book.findMany();
  return result;
};

const getBookById = async (id: string) => {
  const result = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });
  return result;
};

const updateBookById = async (id: string, payload: Partial<Book>) => {
  const result = await prisma.book.update({
    where: {
      bookId: id,
    },
    data: payload,
  });
  return result;
};

const deleteBookById = async (id: string) => {
  await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  const result = await prisma.$transaction(async (transactionClient) => {
    await transactionClient.borrowRecord.deleteMany({
      where: {
        bookId: id,
      },
    });

    const deletedBookData = await transactionClient.book.delete({
      where: {
        bookId: id,
      },
    });

    return deletedBookData;
  });
  return result;
};

export const bookServices = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
