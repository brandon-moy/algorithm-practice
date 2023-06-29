import circleOfNumbers from '../CodeSignal/circleOfNumbers.js';
import { expect } from 'chai';

describe('Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too). Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.', () => {
  it('Returns the first number radially opposite a small number in a small circle of integers', () => {
    const testOneParamOne = 6;
    const testOneParamTwo = 2;

    const testOneResult = circleOfNumbers(testOneParamOne, testOneParamTwo);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(5);
  });

  it('Returns the first number radially opposite a large number in a small circle of integers', () => {
    const testTwoParamOne = 4;
    const testTwoParamTwo = 3;

    const testTwoResult = circleOfNumbers(testTwoParamOne, testTwoParamTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(1);
  });

  it('Returns the first number radially opposite a small number in a large circle of integers', () => {
    const testThreeParamOne = 88;
    const testThreeParamTwo = 12;

    const testThreeResult = circleOfNumbers(testThreeParamOne, testThreeParamTwo);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(56);
  });

  it('Returns the first number radially opposite a large number in a large circle of integers', () => {
    const testFourParamOne = 128;
    const testFourParamTwo = 96;

    const testFourResult = circleOfNumbers(testFourParamOne, testFourParamTwo);

    expect(testFourResult).to.be.a('number');
    expect(testFourResult).to.equal(32);
  });
});
