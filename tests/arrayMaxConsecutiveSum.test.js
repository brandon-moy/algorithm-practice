import arrayMaxConsecutiveSum from '../CodeSignal/arrayMaxConsecutiveSum.js';
import { expect } from 'chai';

describe('Given an array of integers, find the maximal possible sum of some of its k consecutive elements', () => {
  it('Returns the maximal possible sum of elements in a small array', () => {
    const testOneParamOne = [2, 3, 1];
    const testOneParamTwo = 1;
    const testOneResult = arrayMaxConsecutiveSum(testOneParamOne, testOneParamTwo);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(3);
  });

  it('Returns the maximal possible sum of elements in a medium array', () => {
    const testTwoParamOne = [2, 3, 5, 1, 6];
    const testTwoParamTwo = 2;
    const testTwoResult = arrayMaxConsecutiveSum(testTwoParamOne, testTwoParamTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(8);
  });

  it('Returns the maximal possible sum of elements in a large array', () => {
    const testThreeParamOne = [1, 3, 4, 2, 4, 2, 4];
    const testThreeParamTwo = 4;
    const testThreeResult = arrayMaxConsecutiveSum(testThreeParamOne, testThreeParamTwo);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(13);
  });

  it('Returns null if the input array is empty', () => {
    const testFourParamOne = [];
    const testFourParamTwo = 2;
    const testFourResult = arrayMaxConsecutiveSum(testFourParamOne, testFourParamTwo);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
