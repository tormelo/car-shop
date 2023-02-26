import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleController {
  private service: MotorcycleService;

  constructor(
    private req: Request, 
    private res: Response, 
    private next: NextFunction,
  ) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async register() {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.register(motorcycle);
      return this.res.status(201).send(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const updatedMotorcycle = await this.service.update(id, motorcycle);
      return this.res.status(200).send(updatedMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async remove() {
    const { id } = this.req.params;
    try {
      await this.service.remove(id);
      return this.res.sendStatus(204);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAll();
      return this.res.status(200).send(motorcycles);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getById(id);
      return this.res.status(200).send(motorcycle);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
