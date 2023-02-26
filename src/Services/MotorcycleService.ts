import Motorcycle from '../Domains/Motorcycle';
import HttpException from '../exceptions/HttpException';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private motorcycleODM = new MotorcycleODM();

  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  private async findById(id: string) {
    const motorcycle = await this.motorcycleODM.findById(id);

    if (!motorcycle) throw new HttpException(404, 'Motorcycle not found');

    return motorcycle;
  }

  public async register(motorcycle: IMotorcycle) {
    const newMotorcycle = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycles = await this.motorcycleODM.find();
    const motorcyclesArray = motorcycles.map((motorcycle) =>
      this.createMotorcycleDomain(motorcycle));
    return motorcyclesArray;
  }

  public async getById(id: string) {
    const motorcycle = await this.findById(id);
    return this.createMotorcycleDomain(motorcycle);
  }
}

export default MotorcycleService;
