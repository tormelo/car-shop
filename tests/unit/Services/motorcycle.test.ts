import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';
import { validMotorcycle, validMotorcycleBody } from '../../mocks/motorcyclesMock';

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
});