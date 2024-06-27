import express from "express";
import BookController from "../controllers/BookController";
import { ValidateSchema,Schemas } from "../middlewares/Validation";
const router=express.Router();
router.get('/',BookController.getAllBooks);
router.post('/',ValidateSchema(Schemas.book.create,'body') ,BookController.createBook);
router.put('/',ValidateSchema(Schemas.book.update,'body'), BookController.updateBook);
router.delete('/:barcode',ValidateSchema(Schemas.book.delete,'params'),BookController.deleteBook);
router.get('/search',BookController.searchForBooksByQuery);
export = router;