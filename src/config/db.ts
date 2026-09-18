import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    console.error('MongoDB URI is not defined in environment variables');
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('Mongoose connected');
  } catch (err) {
    console.error('MongoDB Error:', (err as Error).message);
    process.exit(1);
  }
};

export default connectDB;
