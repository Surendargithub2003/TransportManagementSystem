import TripLog from '../models/tripLog.js';
import {Request, Response} from 'express';



const avgFuel = async(req : Request , res : Response)=>{
    try{
        const fuelUsage = await TripLog.aggregate([
            {
                $group: {
                    _id : "$vehicleId",
                    avgFuelUsed : {$avg : "$fuelUsed"},
                }
            },
            {
                $lookup:{
                    from: "vehicles",
                    localField: "_id",
                    foreignField: "_id",
                    as: "vehicle",
                }
            },
            {
                $unwind: "$vehicle",
            },
            {
                $project: {
                  vehicleId: "$_id",
                  numberPlate: "$vehicle.numberPlate",
                  avgFuelUsed: 1,
                }
            }
        ])
        res.status(200).json({arr : fuelUsage});
    }
    catch (error:any) {
        res.status(500).json({ message: 'Error fetching fuel usage data', error: error.message });
      }
}

const driverEfficiency = async(req : Request ,res : Response)=>{
    try{
        const driverEfficiency = await TripLog.aggregate([
        {
            $group:{
                _id:"$driverId",
                totalDistance : {$sum : "$distanceKm"},
                totalFuel : {$sum : "$fuelUsed"},
            }
        },
        {
            $lookup:{
                from : "drivers",
                localField : "_id",
                foreignField:"_id",
                as:"driver",
            },
        },
        {
            $unwind : "$driver",
        },
        {
            $project : {
                driverId : "$_id",
                driverName: "$driver.name",
                efficiencyScore:{$divide:["$totalDistance","$totalFuel"]},
            }
        }
        ]);
        res.status(200).json(driverEfficiency);
    }catch(error:any){
        res.status(500).json({message : "Error fetching driver efficiency data", error : error.message})
    }
}

export default {avgFuel,driverEfficiency}