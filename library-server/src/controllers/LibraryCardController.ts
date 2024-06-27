import {Request, Response} from 'express';
import { registerLibraryCard,findLibraryCard } from '../services/LibraryCardService';
import { ILibraryCard } from '../models/LibraryCard';
import { LibraryCardDoesNotExistError } from '../utils/LibraryErrors';
async function getLibraryCard(req: Request, res: Response){
    const {cardId}=req.params;
    try{
        let libraryCard= await findLibraryCard(cardId);
        res.status(200).json({message:"retrieved Library Card",libraryCard});
    }catch(error){
        if(error instanceof LibraryCardDoesNotExistError){
            res.status(404).json({message:"Library Card does not exist"});
         
        }else{
            res.status(500).json({message:"Error retrieving Library Card",error});
        }
    }
}
async function createLibraryCard(req: Request, res: Response){
    const card: ILibraryCard = req.body;
    try{
        let libraryCard= await registerLibraryCard(card);
        res.status(201).json({message:"Library Card created",libraryCard});
    }catch(error){
        res.status(500).json({message:"Error creating Library Card",error});
    }
}
export default {getLibraryCard,createLibraryCard};