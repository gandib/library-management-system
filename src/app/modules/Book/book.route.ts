import express from "express";
import { bookControllers } from "./book.controller";

const router = express.Router();

router.post("/", bookControllers.createBook);

router.get("/", bookControllers.getAllBooks);

router.get("/:bookId", bookControllers.getBookById);

router.put("/:bookId", bookControllers.updateBookById);

router.delete("/:bookId", bookControllers.deleteBookById);

export const bookRoutes = router;
