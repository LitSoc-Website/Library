import mongoose, {Schema, Document} from 'mongoose';
import {IUser} from '../models/user';

export interface IUserModel extends IUser, Document {};

const UserSchema = new Schema(
    {
        type: {type:String, requried:true},
        firstName: {type:String, required:true},
        lastName: {type:String, required:true},
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true}
    },
    {
        versionKey: false
    }
)

export default mongoose.model<IUserModel>('User', UserSchema);