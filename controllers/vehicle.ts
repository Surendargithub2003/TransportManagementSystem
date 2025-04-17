import Vehicle from '../models/vehicle.js'
import { Request, Response } from 'express';



const getVehicle = async(req:Request , res : Response)=>{
    try{
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    }
    catch(error:any){
        res.status(500).json({message : 'Error fetching Vehicles',error : error.message});
    }
}

const postVehicle = async(req : Request, res : Response)=>{
    try {
        const { numberPlate, model , status, fuelType , mileage , lastServiceDate} = req.body;
        const vehicle = new Vehicle({
            numberPlate , 
            model,
            status,
            fuelType,
            mileage,
            lastServiceDate,
        });
        await vehicle.save();
        res.status(201).json({vehicle_id: vehicle._id ,message : "Vehicle added Successfully"});
    }
    catch (error:any){
        res.status(500).json({message : 'Error adding vehicle' , error : error.message});
    }
}

const updateVehicle = async(req: Request , res : Response)=>{
    try {
        const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body , {new : true});
        if(!vehicle){
            return res.status(404).json({message : "Vehicle not found"});
        }
        res.status(200).json({success : true, vehicle});
    }
    catch(error : any){
        res.status(500).json({message : 'Error updating vehicle', error : error.message});
    }
}

const deleteVehicle = async( req : Request , res:Response)=>{
    try {
        const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
        if(!vehicle){
            return res.status(404).json({message : 'Vehicle not found'});
        }
        res.status(200).json({message : 'Vehicle removed'});
    }catch (error:any){
        res.status(500).json({message : 'Error deleting vehicle',error:error.message});
    }
}

export default {getVehicle,postVehicle,updateVehicle,deleteVehicle}