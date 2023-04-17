import arrayChange from '../CodeSignal/arrayChange.js';
import { expect } from 'chai';

describe('You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.', () => {
  it('Returns the number of moves for a short input', () => {
    const testOne = [1, 1, 1];
    const testOneResult = arrayChange(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(3);
  });

  it('Returns the number of moves for an input with negative values', () => {
    const testTwo = [-1000, 0, -2, 0];
    const testTwoResult = arrayChange(testTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(5);
  });

  it('Returns the number of moves for a long input', () => {
    const testThree = [2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15];
    const testThreeResult = arrayChange(testThree);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(13);
  });

  it('Returns null if input array is empty', () => {
    const testFour = [];
    const testFourResult = arrayChange(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });

  it('Returns null if input is not an array', () => {
    const testFive = 'array';
    const testFiveResult = arrayChange(testFive);

    expect(testFiveResult).to.be.a('null');
    expect(testFiveResult).to.equal(null);
  });
});
