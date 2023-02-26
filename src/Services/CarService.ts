import Car from '../Domains/Car';
import HttpException from '../exceptions/HttpException';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private carODM = new CarODM();

  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  private async findById(id: string) {
    const car = await this.carODM.findById(id);

    if (!car) throw new HttpException(404, 'Car not found');

    return car;
  }

  public async register(car: ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async update(id: string, car: ICar) {
    await this.carODM.update(id, car);

    const updatedCar = await this.findById(id);

    if (!updatedCar) throw new HttpException(404, 'Car not found');

    return this.createCarDomain(updatedCar);
  }

  public async getAll() {
    const cars = await this.carODM.find();
    const carsArray = cars.map((car) =>
      this.createCarDomain(car));
    return carsArray;
  }

  public async getById(id: string) {
    const car = await this.findById(id);
    return this.createCarDomain(car);
  }
}

export default CarService;
