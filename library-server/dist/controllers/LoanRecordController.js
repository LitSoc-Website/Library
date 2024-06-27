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
const LoanRecordService_1 = require("../services/LoanRecordService");
const LibraryErrors_1 = require("../utils/LibraryErrors");
function createdRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let record = req.body;
        try {
            let createdRecord = yield (0, LoanRecordService_1.generateRecord)(record);
            res.status(201).json({ message: "Record created successfully", record: createdRecord });
        }
        catch (error) {
            res.status(500).json({ message: "Error creating record", error });
        }
    });
}
function updateRecord(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let record = req.body;
        try {
            let updatedRecord = yield (0, LoanRecordService_1.modifyRecord)(record);
            res.status(200).json({ message: "Record updated successfully", record: updatedRecord });
        }
        catch (error) {
            if (error instanceof LibraryErrors_1.LoanRecordDoesNotExistError) {
                res.status(404).json({ message: "Unable to modify record", error: error.message });
            }
            else {
                res.status(500).json({ message: "Error updating record", error });
            }
        }
    });
}
function getAllRecords(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let records = yield (0, LoanRecordService_1.findAllRecords)();
            res.status(200).json({ message: "Records retrieved successfully", records });
        }
        catch (error) {
            res.status(500).json({ message: "Error retrieving records", error });
        }
    });
}
function getRecordsByProperty(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        let param = req.body;
        try {
            let records = yield (0, LoanRecordService_1.queryRecords)(param);
            res.status(200).json({ message: "Records retrieved successfully", records });
        }
        catch (error) {
            res.status(500).json({ message: "Error retrieving records", error });
        }
    });
}
exports.default = { createdRecord, updateRecord, getAllRecords, getRecordsByProperty };
