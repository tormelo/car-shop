import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRouter = Router();

MotorcycleRouter.get(
  '/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

MotorcycleRouter.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

MotorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).register(),
);

export default MotorcycleRouter;
