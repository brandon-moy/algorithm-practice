import shapeArea from '../CodeSignal/shapeArea.js';
import { expect } from 'chai';

describe('Given an n=interesting polygon, find the area of the polygon for a given n', () => {
  it('Returns an area of 5 for n of 2', () => {
    const testOne = 2;
    const testOneResult = shapeArea(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(5);
  });

  it('Returns an area of 13 for n of 3', () => {
    const testTwo = 3;
    const testTwoResult = shapeArea(testTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(13);
  });

  it('Returns an area of 1 for n of 1', () => {
    const testThree = 1;
    const testThreeResult = shapeArea(testThree);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(1);
  });
});
