import express from "express";
import { borrowReturnControllers } from "./borrow-return.controller";

const router = express.Router();

router.post("/borrow", borrowReturnControllers.createBorrow);

router.get("/borrow/overdue", borrowReturnControllers.overdueBorrowList);

router.post("/return", borrowReturnControllers.createReturn);

export const borrowReturnRoutes = router;
