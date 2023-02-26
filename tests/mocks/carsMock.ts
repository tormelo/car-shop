import ICar from '../../src/Interfaces/ICar';

export const validCarBody: ICar = {
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};
export const validCar: ICar = {
  id: '63fb69ef6e617f22b9e2754f',
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

export const carList: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];