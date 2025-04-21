import mongoose , {Document} from 'mongoose';

type UserRole = 'Admin' | 'Manager' | 'Driver' ;

interface IUser extends Document {
    username : string ; 
    password : string ;
    role : UserRole;
}

const userSchema = new mongoose.Schema<IUser>({
    username : {type : String , required : true , unique : true },
    password : {type : String , required : true}, 
    role : {type : String , required : true},
})

export default mongoose.model<IUser>('User',userSchema)