import {findAllRecords,generateRecord,modifyRecord,queryRecords} from "../services/LoanRecordService";
import {LoanRecordDoesNotExistError} from "../utils/LibraryErrors";
import {Request,Response} from "express";
async function createdRecord(req:Request,res:Response){
    let record=req.body;
    try{
        let createdRecord=await generateRecord(record);
        res.status(201).json({message:"Record created successfully",record:createdRecord});
    }catch(error){
        res.status(500).json({message:"Error creating record",error});
    }
}
async function updateRecord(req:Request,res:Response){
    let record=req.body;
    try{
        let updatedRecord=await modifyRecord(record);
        res.status(200).json({message:"Record updated successfully",record:updatedRecord});
    }catch(error){
        if(error instanceof LoanRecordDoesNotExistError){
            res.status(404).json({message:"Unable to modify record",error:error.message});
        }else{
        res.status(500).json({message:"Error updating record",error});
        }
    }
}
async function getAllRecords(req:Request,res:Response){ 
    try{
        let records=await findAllRecords();
        res.status(200).json({message:"Records retrieved successfully",records});
    }catch(error){
        res.status(500).json({message:"Error retrieving records",error});
    }
    
}
async function getRecordsByProperty(req:Request,res:Response){
    let param=req.body;
    try{
        let records=await queryRecords(param);
        res.status(200).json({message:"Records retrieved successfully",records});
    }catch(error){
        res.status(500).json({message:"Error retrieving records",error});
    }
}
export default{createdRecord,updateRecord,getAllRecords,getRecordsByProperty};