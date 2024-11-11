import { Member } from "@prisma/client";
import prisma from "../../../shared/prisma";

const createMember = async (payload: Member) => {
  const result = await prisma.member.create({
    data: payload,
  });

  return result;
};

const getAllMembers = async () => {
  const result = await prisma.member.findMany();
  return result;
};

const getMemberById = async (id: string) => {
  const result = await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });
  return result;
};

const updateMemberById = async (id: string, payload: Partial<Member>) => {
  const result = await prisma.member.update({
    where: {
      memberId: id,
    },
    data: payload,
  });
  return result;
};

const deleteMemberById = async (id: string) => {
  // check member isExist
  await prisma.member.findUniqueOrThrow({
    where: {
      memberId: id,
    },
  });

  const result = await prisma.member.delete({
    where: {
      memberId: id,
    },
  });

  return result;
};

export const memberServices = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
};
