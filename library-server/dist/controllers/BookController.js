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
Object.defineProperty(exports, "__esModule", { value: true });
const BookService_1 = require("../services/BookService");
const LibraryErrors_1 = require("../utils/LibraryErrors");
const BookService_2 = require("../services/BookService");
function getAllBooks(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let books = yield (0, BookService_1.findAllBooks)();
            res.status(200).json({ message: "Books retrieved successfully", count: books.length, books });
        }
        catch (error) {
            res.status(500).json({ message: "Error retrieving books", error });
        }
    });
}
function createBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let book = req.body;
        try {
            let savedBook = yield (0, BookService_1.registerBook)(book);
            res.status(201).json({ message: "Book created successfully", savedBook });
        }
        catch (error) {
            res.status(500).json({ message: "Error creating book", error });
        }
    });
}
function updateBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let book = req.body;
        try {
            let updatedBook = yield (0, BookService_1.modifyBook)(book);
            res.status(200).json({ message: "Book updated successfully", updatedBook });
        }
        catch (error) {
            if (error instanceof LibraryErrors_1.BookDoesNotExistError) {
                res.status(404).json({ message: "Book does not exist", error });
            }
            else {
                res.status(500).json({ message: "Error updating book", error });
            }
        }
    });
}
function deleteBook(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { barcode } = req.params;
        try {
            let message = yield (0, BookService_1.removeBook)(barcode);
            res.status(200).json({ message });
        }
        catch (error) {
            if (error instanceof LibraryErrors_1.BookDoesNotExistError) {
                res.status(404).json({ message: "Book does not exist", error });
            }
            else {
                res.status(500).json({ message: "Error deleting book", error });
            }
        }
    });
}
function searchForBooksByQuery(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let { title, barcode, description, author, subject, genre, page = 1, limit = 25 } = req.query;
        let books = yield (0, BookService_2.queryBooks)(Number(page), Number(limit), title, barcode, description, author, subject, genre);
        res.status(200).json({ message: "Books retrieved successfully", page: books });
    });
}
exports.default = { getAllBooks, createBook, updateBook, deleteBook, searchForBooksByQuery };
