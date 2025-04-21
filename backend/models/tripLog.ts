import mongoose from 'mongoose';


const tripLogSchema = new mongoose.Schema({
    driverId : { type : mongoose.Schema.Types.ObjectId, ref:'Driver',required : true},
    vehicleId : {type : mongoose.Schema.Types.ObjectId,ref:'Vehicle',required : true},
    startLocation : {type : String , required : true},
    endLocation : {type : String , required : true},
    distanceKm : { type : Number , requried : true},
    fuelUsed : {type : Number , required : true},
    startTime : {type : Date, required : true},
    endTime: {type : Date, required : true } , 
    status : {type : String , required : true},
})

export default mongoose.model('TripLog',tripLogSchema);
