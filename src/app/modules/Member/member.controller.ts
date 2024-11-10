import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { memberServices } from "./member.service";

const createMember = catchAsync(async (req, res) => {
  const result = await memberServices.createMember(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member created successfully",
    data: result,
  });
});

const getAllMembers = catchAsync(async (req, res) => {
  const result = await memberServices.getAllMembers();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Members retrieved successfully",
    data: result,
  });
});

const getMemberById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberServices.getMemberById(memberId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member retrieved successfully",
    data: result,
  });
});

const updateMemberById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberServices.updateMemberById(memberId, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member updated successfully",
    data: result,
  });
});

const deleteMemberById = catchAsync(async (req, res) => {
  const { memberId } = req.params;
  await memberServices.deleteMemberById(memberId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Member successfully deleted",
  });
});

export const memberControllers = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
