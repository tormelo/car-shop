import Car from '../Domains/Car';
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

  public async register(car: ICar) {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const cars = await this.carODM.find();
    const carsArray = cars.map((car) =>
      this.createCarDomain(car));
    return carsArray;
  }
}

export default CarService;
