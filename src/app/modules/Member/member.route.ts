import express from "express";
import { memberControllers } from "./member.controller";

const router = express.Router();

router.post("/", memberControllers.createMember);

router.get("/", memberControllers.getAllMembers);

router.get("/:memberId", memberControllers.getMemberById);

router.put("/:memberId", memberControllers.updateMemberById);

router.delete("/:memberId", memberControllers.deleteMemberById);

export const memberRoutes = router;
