import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';
import { 
  carList, 
  validCar, 
  validCarBody, 
  validId } from '../../mocks/carsMock';

describe('Para o service Car', function () {
  describe('Para o método register', function () {
    it('Deve retornar o carro registrado', async function () {
      sinon.stub(Model, 'create').resolves(validCar);

      const carOutput = new Car(validCar);

      const service = new CarService();
      const result = await service.register(validCarBody);

      expect(result).to.be.deep.equal(carOutput);

      sinon.restore();
    });  
  });

  describe('Para o método getAll', function () {
    it('Deve retornar a lista de carros', async function () {
      sinon.stub(Model, 'find').resolves(carList);

      const service = new CarService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(carList);

      sinon.restore();
    });  
  });

  describe('Para o método getById', function () {
    it('Deve retornar o carro do id buscado', async function () {
      sinon.stub(Model, 'findById').resolves(validCar);

      const carOutput = new Car(validCar);

      const service = new CarService();
      const result = await service.getById(validId);

      expect(result).to.be.deep.equal(carOutput);

      sinon.restore();
    });  
  });

  describe('Para o método update', function () {
    it('Deve retornar o carro atualizado', async function () {
      sinon.stub(Model, 'findById').resolves(validCar);
      sinon.stub(Model, 'findByIdAndUpdate').resolves(validCar);

      const carOutput = new Car(validCar);

      const service = new CarService();
      const result = await service.update(validId, validCarBody);

      expect(result).to.be.deep.equal(carOutput);

      sinon.restore();
    });  
  });
});