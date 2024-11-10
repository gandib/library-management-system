import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { bookServices } from "./book.service";

const createBook = catchAsync(async (req, res) => {
  const result = await bookServices.createBook(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book created successfully",
    data: result,
  });
});

const getAllBooks = catchAsync(async (req, res) => {
  const result = await bookServices.getAllBooks();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Books retrieved successfully",
    data: result,
  });
});

const getBookById = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.getBookById(bookId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book retrieved successfully",
    data: result,
  });
});

const updateBookById = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookServices.updateBookById(bookId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book updated successfully",
    data: result,
  });
});

const deleteBookById = catchAsync(async (req, res) => {
  const { bookId } = req.params;
  await bookServices.deleteBookById(bookId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book successfully deleted",
  });
});

export const bookControllers = {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
};
