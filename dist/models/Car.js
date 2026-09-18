"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const mongoose_1 = require("mongoose");
const carSchema = new mongoose_1.Schema({
    brand: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true },
    fuel: { type: String, required: true },
    transmission: { type: String, required: true },
    mileage: { type: Number, required: true },
    color: { type: String, required: true },
    engine: { type: String, required: true },
    driveType: { type: String, required: true },
    features: { type: [String], default: [] },
    description: { type: String },
    image: { type: String, required: true },
    condition: { type: String, enum: ['new', 'used'] },
}, { timestamps: true });
exports.Car = (0, mongoose_1.model)('Car', carSchema);
//# sourceMappingURL=Car.js.map