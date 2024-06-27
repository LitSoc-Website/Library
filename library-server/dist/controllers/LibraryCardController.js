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
const LibraryCardService_1 = require("../services/LibraryCardService");
const LibraryErrors_1 = require("../utils/LibraryErrors");
function getLibraryCard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cardId } = req.params;
        try {
            let libraryCard = yield (0, LibraryCardService_1.findLibraryCard)(cardId);
            res.status(200).json({ message: "retrieved Library Card", libraryCard });
        }
        catch (error) {
            if (error instanceof LibraryErrors_1.LibraryCardDoesNotExistError) {
                res.status(404).json({ message: "Library Card does not exist" });
            }
            else {
                res.status(500).json({ message: "Error retrieving Library Card", error });
            }
        }
    });
}
function createLibraryCard(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const card = req.body;
        try {
            let libraryCard = yield (0, LibraryCardService_1.registerLibraryCard)(card);
            res.status(201).json({ message: "Library Card created", libraryCard });
        }
        catch (error) {
            res.status(500).json({ message: "Error creating Library Card", error });
        }
    });
}
exports.default = { getLibraryCard, createLibraryCard };
