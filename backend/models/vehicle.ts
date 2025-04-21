import mongoose from 'mongoose';

const vehicleSchema = new mongoose.Schema({
    numberPlate : {type : String , required:true , unique : true},
    model : {type : String , required : true  },
    status : {type : String , required : true  },
    fuelType : {type : String , required : true},
    mileage : {type : Number , required : true},
    lastServiceDate : {type : Date, required : true},
})

export default mongoose.model('Vehicle',vehicleSchema);

