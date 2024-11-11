import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { borrowReturnServices } from "./borrow-return.service";

const createBorrow = catchAsync(async (req, res) => {
  const result = await borrowReturnServices.createBorrow(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const createReturn = catchAsync(async (req, res) => {
  await borrowReturnServices.createReturn(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book returned successfully",
  });
});

const overdueBorrowList = catchAsync(async (req, res) => {
  const result = await borrowReturnServices.overdueBorrowList();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message:
      result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
    data: result,
  });
});

export const borrowReturnControllers = {
  createBorrow,
  createReturn,
  overdueBorrowList,
};
