"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRoutes = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const router = express_1.default.Router();
router.post("/", member_controller_1.memberControllers.createMember);
router.get("/", member_controller_1.memberControllers.getAllMembers);
router.get("/:memberId", member_controller_1.memberControllers.getMemberById);
router.put("/:memberId", member_controller_1.memberControllers.updateMemberById);
router.delete("/:memberId", member_controller_1.memberControllers.deleteMemberById);
exports.memberRoutes = router;
