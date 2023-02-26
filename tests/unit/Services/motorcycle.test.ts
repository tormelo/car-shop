import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { motorcycleList, validMotorcycle, validMotorcycleBody } from '../../mocks/motorcyclesMock';

describe('Para o service Motorcycle', function () {
  describe('Para o método register', function () {
    it('Deve retornar a moto registrada', async function () {
      sinon.stub(Model, 'create').resolves(validMotorcycle);

      const carOutput = new Motorcycle(validMotorcycle);

      const service = new MotorcycleService();
      const result = await service.register(validMotorcycleBody);

      expect(result).to.be.deep.equal(carOutput);

      sinon.restore();
    });  
  });

  describe('Para o método getAll', function () {
    it('Deve retornar a lista de motos', async function () {
      sinon.stub(Model, 'find').resolves(motorcycleList);

      const service = new MotorcycleService();
      const result = await service.getAll();

      expect(result).to.be.deep.equal(motorcycleList);

      sinon.restore();
    });  
  });
});