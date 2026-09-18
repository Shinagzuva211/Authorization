"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error('MongoDB URI is not defined in environment variables');
        process.exit(1);
    }
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log('Mongoose connected');
    }
    catch (err) {
        console.error('MongoDB Error:', err.message);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=db.js.map