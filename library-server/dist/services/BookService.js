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
exports.paginateBooks = exports.queryBooks = exports.removeBook = exports.registerBook = exports.modifyBook = exports.findAllBooks = void 0;
const BookDao_1 = __importDefault(require("../daos/BookDao"));
const LibraryErrors_1 = require("../utils/LibraryErrors");
function findAllBooks() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield BookDao_1.default.find();
    });
}
exports.findAllBooks = findAllBooks;
function modifyBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = yield BookDao_1.default.findOneAndUpdate({ barcode: book.barcode }, book, { new: true });
            if (id)
                return book;
            throw new LibraryErrors_1.BookDoesNotExistError("Book does not exist");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.modifyBook = modifyBook;
function registerBook(book) {
    return __awaiter(this, void 0, void 0, function* () {
        const savedBook = new BookDao_1.default(book);
        return yield savedBook.save();
    });
}
exports.registerBook = registerBook;
function removeBook(barcode) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = yield BookDao_1.default.findOneAndDelete({ barcode });
            if (id)
                return "Successfully deleted book";
            throw new LibraryErrors_1.BookDoesNotExistError("Book does not exist");
        }
        catch (error) {
            throw error;
        }
    });
}
exports.removeBook = removeBook;
function queryBooks(page, limit, title, barcode, description, author, subject, genre) {
    return __awaiter(this, void 0, void 0, function* () {
        let books = yield BookDao_1.default.find();
        let filteredBooks = [];
        books.forEach((book) => {
            if (barcode) {
                if (book.barcode.toLowerCase().includes(barcode.toLowerCase()) && !filteredBooks.some((b => b['barcode'] === book.barcode))) {
                    filteredBooks.push(book);
                }
            }
            if (title) {
                if (book.title.toLowerCase().includes(title.toLowerCase()) && !filteredBooks.some((b => b['barcode'] === book.barcode))) {
                    filteredBooks.push(book);
                }
            }
            if (description) {
                if (book.description.toLowerCase().includes(description.toLowerCase()) && !filteredBooks.some((b => b['barcode'] === book.barcode))) {
                    filteredBooks.push(book);
                }
            }
            if (author) {
                if (book.authors.some((a) => a.toLowerCase().includes(author.toLowerCase())) && !filteredBooks.some((b => b['barcode'] === book.barcode))) {
                    filteredBooks.push(book);
                }
            }
            if (subject) {
                if (book.subjects.some((s) => s.toLowerCase().includes(subject.toLowerCase())) && !filteredBooks.some((b => b['barcode'] === book.barcode))) {
                    filteredBooks.push(book);
                }
            }
            if (genre) {
                if (book.genre.toLowerCase().includes(genre.toLowerCase()) && !filteredBooks.some((b => b['barcode'] === book.barcode))) {
                    filteredBooks.push(book);
                }
            }
        });
        return paginateBooks(filteredBooks, page, limit);
    });
}
exports.queryBooks = queryBooks;
function paginateBooks(book, page, limit) {
    let pageBooks = [];
    const pages = Math.ceil(book.length / Number(limit));
    if (Number(page) === pages) {
        const startPoint = (Number(page) - 1) * Number(limit);
        pageBooks = book.slice(startPoint);
    }
    else {
        const startPoint = (Number(page) - 1) * Number(limit);
        pageBooks = book.slice(startPoint, startPoint + Number(limit));
    }
    const pageObject = {
        totalCount: book.length,
        currentPage: Number(page),
        totalPages: pages,
        limit: Number(limit),
        pageCount: pageBooks.length,
        items: pageBooks
    };
    return pageObject;
}
exports.paginateBooks = paginateBooks;
