import {Express,Request,Response} from 'express';
import authRoutes from './AuthRoutes';
import bookRoutes from './BookRoutes';
import userRoutes from './UserRoutes';
import cardRoutes from './LibraryCardRoutes';
import loanRoutes from './LoanRecordRoutes';
export function registerRoutes(app:Express){
    app.get('/health',(req:Request,res:Response)=>{
        res.status(200).json({message:"Server running properly"});
    });
    app.use('/auth',authRoutes);
    app.use('/users',userRoutes);
    app.use('/book',bookRoutes);
    app.use('/card',cardRoutes);
    app.use('/loan',loanRoutes);
}