import { Request,Response } from "express";
import { findAllBooks,registerBook,modifyBook,removeBook } from "../services/BookService";
import { IBook } from "../models/Book";
import { IBookModel } from "../daos/BookDao";
import { BookDoesNotExistError } from "../utils/LibraryErrors";
import { queryBooks } from "../services/BookService";
async function getAllBooks(req:Request,res:Response){
    try{
        let books=await findAllBooks();
        res.status(200).json({message:"Books retrieved successfully",count:books.length,books});
    }catch(error:any){
        res.status(500).json({message:"Error retrieving books",error});
    }
}
async function createBook(req:Request,res:Response){
    let book=req.body;
    try{
        let savedBook=await registerBook(book);
        res.status(201).json({message:"Book created successfully",savedBook});
    }catch(error:any){
        res.status(500).json({message:"Error creating book",error});
    }
}
async function updateBook(req:Request,res:Response){
    let book=req.body;
    try{
        let updatedBook=await modifyBook(book);
        res.status(200).json({message:"Book updated successfully",updatedBook});
    }catch(error:any){
        if(error instanceof BookDoesNotExistError){ res.status(404).json({message:"Book does not exist",error});}
        else {res.status(500).json({message:"Error updating book",error});}
    }
}
async function deleteBook(req:Request,res:Response){
    let {barcode}=req.params;
    try{
        let message=await removeBook(barcode);
        res.status(200).json({message});
    }catch(error:any){
        if(error instanceof BookDoesNotExistError){ res.status(404).json({message:"Book does not exist",error});}
        else{
        res.status(500).json({message:"Error deleting book",error});}
    }
}
async function searchForBooksByQuery(req:Request,res:Response){
    let {title,barcode,description,author,subject,genre,page=1,limit=25}=req.query;
    let books=await queryBooks(
        Number(page),
        Number(limit),
        title as string,
        barcode as string,
        description as string,
        author as string,
        subject as string,
        genre as string
    );
    res.status(200).json({message:"Books retrieved successfully",page:books});
}
export default{getAllBooks,createBook,updateBook,deleteBook,searchForBooksByQuery};