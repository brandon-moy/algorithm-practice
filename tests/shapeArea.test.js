import shapeArea from '../CodeSignal/shapeArea.js';
import { expect } from 'chai';

describe('Given an n=interesting polygon, find the area of the polygon for a given n', () => {
  it('Returns an area of positive n', () => {
    const testOne = 2;
    const testOneResult = shapeArea(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(5);
  });

  it('Returns 1 if n is a negative number', () => {
    const testTwo = -3;
    const testTwoResult = shapeArea(testTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(1);
  });

  it('Returns an area of large n', () => {
    const testThree = 999;
    const testThreeResult = shapeArea(testThree);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(1994005);
  });

  it('Returns null if n is not a number', () => {
    const testThree = true;
    const testThreeResult = shapeArea(testThree);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });
});
