"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const AuthRoutes_1 = __importDefault(require("./AuthRoutes"));
const BookRoutes_1 = __importDefault(require("./BookRoutes"));
const UserRoutes_1 = __importDefault(require("./UserRoutes"));
const LibraryCardRoutes_1 = __importDefault(require("./LibraryCardRoutes"));
const LoanRecordRoutes_1 = __importDefault(require("./LoanRecordRoutes"));
function registerRoutes(app) {
    app.get('/health', (req, res) => {
        res.status(200).json({ message: "Server running properly" });
    });
    app.use('/auth', AuthRoutes_1.default);
    app.use('/users', UserRoutes_1.default);
    app.use('/book', BookRoutes_1.default);
    app.use('/card', LibraryCardRoutes_1.default);
    app.use('/loan', LoanRecordRoutes_1.default);
}
exports.registerRoutes = registerRoutes;
