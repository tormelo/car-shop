import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRouter = Router();

MotorcycleRouter.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).register(),
);

export default MotorcycleRouter;
