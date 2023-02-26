import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import { validCar, validCarBody } from '../../mocks/carsMock';

describe('Para o método register de CarService', function () {
  afterEach(function () {
    sinon.restore();
  });
  
  it('Deve retornar o carro registrado', async function () {
    sinon.stub(Model, 'create').resolves(validCar);

    const carOutput = new Car(validCar);

    const service = new CarService();
    const result = await service.register(validCarBody);

    expect(result).to.be.deep.equal(carOutput);
  });  
});