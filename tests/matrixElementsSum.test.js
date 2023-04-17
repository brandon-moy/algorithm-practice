import matrixElementSum from '../CodeSignal/matrixElementsSum.js';
import { expect } from 'chai';

describe('Given a matrix, return the total sum of rooms that are not 0 or below a 0', () => {
  it('Returns a number of sum of cost of available rooms for a matrix', () => {
    const testOne = [[1, 1, 1, 0],
      [0, 5, 0, 1],
      [2, 1, 3, 10]];
    const testOneResult = matrixElementSum(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(9);
  });

});
