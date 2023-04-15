import adjacentElementsProduct from '../CodeSignal/adjacentElementsProduct.js';
import { expect } from 'chai';

describe('Given an array of integers, find the pair of adjacent elements that has the largest product and return the product', () => {
  it('Returns the largest product of two numbers from an array', () => {
    const testOne = [3, 6, -2, -5, 7, 3];
    const testOneResult = adjacentElementsProduct(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(21);
  });

  it('Returns null if given an empty array', () => {
    const testTwo = [];
    const testTwoResult = adjacentElementsProduct(testTwo);

    expect(testTwoResult).to.be.a('null');
    expect(testTwoResult).to.equal(null);
  });
});
