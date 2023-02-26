import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private service: CarService;

  constructor(
    private req: Request, 
    private res: Response, 
    private next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async register() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.register(car);
      return this.res.status(201).send(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default CarController;
