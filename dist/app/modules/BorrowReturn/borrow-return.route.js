"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowReturnRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_return_controller_1 = require("./borrow-return.controller");
const router = express_1.default.Router();
router.post("/borrow", borrow_return_controller_1.borrowReturnControllers.createBorrow);
router.get("/borrow/overdue", borrow_return_controller_1.borrowReturnControllers.overdueBorrowList);
router.post("/return", borrow_return_controller_1.borrowReturnControllers.createReturn);
exports.borrowReturnRoutes = router;
