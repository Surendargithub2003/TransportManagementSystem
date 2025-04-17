import { Request, Response } from "express";
import TripLog from "../models/tripLog.js";

const getTrip = async (req: Request, res: Response) => {
    try {
      const trips = await TripLog.find().populate('driverId').populate('vehicleId');
      res.status(200).json(trips);
    } catch (error : any) {
      res.status(500).json({ message: 'Error fetching trips', error: error.message });
    }
  }

const postTrip = async(req : Request , res : Response)=>{
    try{
        const {driverId , vehicleId , startLocation , endLocation , distanceKm , fuelUsed, startTime , endTime,status} = req.body;
        const trip = new TripLog({
            driverId,
            vehicleId,
            startLocation,
            endLocation,
            distanceKm,
            fuelUsed,
            startTime,
            endTime,
            status,
        })
        await trip.save();
        res.status(201).json({tripId : trip._id});
    }catch(error : any){
        res.status(500).json({message : 'Error Creating trip log', error : error.message});
    }
}

const updateTrip = async ( req : Request , res : Response)=>{
    try{
        const {status} = req.body;
        const trip = await TripLog.findByIdAndUpdate(req.params.id, {status},{new : true})
        if(!trip){
            return res.status(4040).json({message : 'Trip not found'});
        }
        res.status(200).json({message : 'Trip Status updated',trip});
    }
    catch(error : any){
        res.status(500).json({message : 'Error updating trip status', error:error.message})
    }
}

export default {getTrip,postTrip,updateTrip}