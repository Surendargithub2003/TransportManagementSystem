import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        licenseNumber: { type: String, required: true, unique: true },
        phone: { type: String, required: true },
        assignedVehicle: {type: mongoose.Schema.Types.ObjectId,ref: "Vehicle",},
        rating: { type: Number, default: 0 },
    },
);

export default mongoose.model("Driver", driverSchema);


