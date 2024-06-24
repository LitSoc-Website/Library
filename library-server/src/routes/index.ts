import {Express,Request,Response} from 'express';
import authRoutes from './AuthRoutes';
import bookRoutes from './BookRoutes';
import userRoutes from './UserRoutes';
export function registerRoutes(app:Express){
    app.get('/health',(req:Request,res:Response)=>{
        res.status(200).json({message:"Server running properly"});
    });
    app.use('/auth',authRoutes);
    app.use('/users',userRoutes);
    app.use('/book',bookRoutes);
}