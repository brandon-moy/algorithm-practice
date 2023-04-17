import areSimilar from '../CodeSignal/areSimilar.js';
import { expect } from 'chai';

describe('Given two arrays a and b, check whether they can be obtained by swapping at most one pair of elements in one of the arrays.', () => {
  it('Returns a boolean for two short input arrays', () => {
    const testOneParamOne = [1, 2, 3];
    const testOneParamTwo = [1, 3, 2];
    const testOneResult = areSimilar(testOneParamOne, testOneParamTwo);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean for two long input arrays', () => {
    const testTwoParamOne = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const testTwoParamTwo = [1, 3, 2, 4, 5, 6, 7, 8, 9];
    const testTwoResult = areSimilar(testTwoParamOne, testTwoParamTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(true);
  });

  it('Returns null if empty array or non-array input', () => {
    const testThreeParamOne = [];
    const testThreeParamTwo = [1, 2, 3, 4];
    const testThreeResult = areSimilar(testThreeParamOne, testThreeParamTwo);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });

  it('Returns null if empty array or non-array input', () => {
    const testFourParamOne = 'string';
    const testFourParamTwo = [1, 2, 3, 4];
    const testFourResult = areSimilar(testFourParamOne, testFourParamTwo);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
