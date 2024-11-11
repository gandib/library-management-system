"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowReturnServices = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createBorrow = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.create({
        data: payload,
        select: {
            borrowId: true,
            bookId: true,
            memberId: true,
            borrowDate: true,
        },
    });
    return result;
});
const createReturn = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const date = new Date();
    const isoString = date.toISOString();
    const result = yield prisma_1.default.borrowRecord.update({
        where: {
            borrowId: payload.borrowId,
        },
        data: {
            returnDate: isoString,
        },
    });
    return result;
});
const overdueBorrowList = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.borrowRecord.findMany({
        include: {
            book: true,
            member: true,
        },
    });
    const overdueData = result
        .map((data) => {
        const borrowDate = data.borrowDate;
        const borrowDateInMS = Date.parse(borrowDate);
        // check overdues
        if (86400000 * 14 < Date.now() - borrowDateInMS &&
            (data === null || data === void 0 ? void 0 : data.returnDate) === null) {
            return {
                borrowId: data.borrowId,
                bookTitle: data.book.title,
                borrowerName: data.member.name,
                overdueDays: Number(`${Math.round((Date.now() - borrowDateInMS - 86400000 * 14) / 86400000)}`),
            };
        }
        return null;
    })
        .filter((item) => item !== null);
    return overdueData;
});
exports.borrowReturnServices = {
    createBorrow,
    createReturn,
    overdueBorrowList,
};
