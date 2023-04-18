import arrayMaximalAdjacentDifference from '../CodeSignal/arrayMaximalAdjacentDiffernce.js';
import { expect } from 'chai';

describe('Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.', () => {
  it('Returns a number of the maximum different between two adjacent elements in a short array', () => {
    const testOne = [2, 4, 1, 0];
    const testOneResult = arrayMaximalAdjacentDifference(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(3);
  });

  it('Returns a number of the maximum different between two adjacent elements in a long array', () => {
    const testTwo = [2, 4, 1, 0, 3, 5, 6, 3, 4, 5, 3];
    const testTwoResult = arrayMaximalAdjacentDifference(testTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(3);
  });

  it('Returns null if the input array is empty', () => {
    const testThree = [];
    const testThreeResult = arrayMaximalAdjacentDifference(testThree);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });

  it('Returns null if any of the inputs are not a number', () => {
    const testFour = [1, 3, 'five', 2];
    const testFourResult = arrayMaximalAdjacentDifference(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
