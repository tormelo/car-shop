import { Router } from 'express';
import CarController from '../Controllers/CarController';

const CarRouter = Router();

CarRouter.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).getById(),
);

CarRouter.get(
  '/',
  (req, res, next) => new CarController(req, res, next).getAll(),
);

CarRouter.post(
  '/',
  (req, res, next) => new CarController(req, res, next).register(),
);

export default CarRouter;
