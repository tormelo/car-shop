import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';
import CarRouter from './Routes/CarRouter';
import MotorcycleRouter from './Routes/MotorcycleRouter';

const app = express();
app.use(express.json());
app.use('/cars', CarRouter);
app.use('/motorcycles', MotorcycleRouter);
app.use(ErrorHandler.handle);

export default app;
