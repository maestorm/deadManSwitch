export const mongoURI = 'mongodb://127.0.0.1:27017/dead-man-switch';

const mongoose = require('mongoose');

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {});

    return mongoose.connection;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};