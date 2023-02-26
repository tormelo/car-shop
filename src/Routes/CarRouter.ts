import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRouter = Router();

CarRouter.post(
  '/',
  (req, res, next) => new CarController(req, res, next).register(),
);

export default CarRouter;
