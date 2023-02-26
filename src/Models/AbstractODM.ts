import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
} from 'mongoose';
import HttpException from '../exceptions/HttpException';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  private validateId(id: string): void {
    if (!isValidObjectId(id)) throw new HttpException(422, 'Invalid mongo id');
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async find(): Promise<T[]> {
    return this.model.find();
  }

  public async findById(id: string): Promise<T | null> {
    this.validateId(id);
    return this.model.findById(id);
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    this.validateId(id);
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj }, 
    );
  }

  public async delete(id: string): Promise<T | null> {
    this.validateId(id);
    return this.model.findByIdAndDelete(id);
  }
}

export default AbstractODM;