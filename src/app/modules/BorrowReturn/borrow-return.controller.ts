import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { borrowReturnServices } from "./borrow-return.service";

const createBorrow = catchAsync(async (req, res) => {
  const result = await borrowReturnServices.createBorrow();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book borrowed successfully",
    data: result,
  });
});

const createReturn = catchAsync(async (req, res) => {
  const result = await borrowReturnServices.createReturn();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Book returned successfully",
    data: result,
  });
});

export const borrowReturnControllers = {
  createBorrow,
  createReturn,
};
