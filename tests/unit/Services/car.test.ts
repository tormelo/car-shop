import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import { carList, validCar, validCarBody } from '../../mocks/carsMock';

describe('Para o service Car', function () {
  describe('Para o método register', function () {
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

  describe('Para o método getAll', function () {
    afterEach(function () {
      sinon.restore();
    });
  
    it('Deve retornar a lista de carros', async function () {
      sinon.stub(Model, 'find').resolves(carList);

      const service = new CarService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(carList);
    });  
  });
});