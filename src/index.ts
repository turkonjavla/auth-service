import mongoose from 'mongoose';
import { app } from './app';

const start = async () => {
  const { AUTH_MONGO_URI, JWT_KEY } = process.env;

  if (!JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }

  if (!AUTH_MONGO_URI) {
    throw new Error('AUTH_MONGO_URI must be defined');
  }

  try {
    await mongoose.connect(AUTH_MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Auth service connected to mongodb');
  } catch (error) {
    console.error('Error connecting to mongodb: ', error.message);
  }
  app.listen(3000, () => console.log(`Ready at http://locahost:3000`));
};

start();
