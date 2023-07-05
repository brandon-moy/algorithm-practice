import extractEachKth from '../CodeSignal/extractEachKth.js';
import { expect } from 'chai';

describe('Given array of integers, remove each kth element from it', () => {
  it('Returns an array after removing each kth element a short array', () => {
    const testOneParamOne = [1, 2, 3];
    const testOneParamTwo = 2;
    const testOneResult = extractEachKth(testOneParamOne, testOneParamTwo);

    expect(testOneResult).to.be.an('array');
    expect(testOneResult).to.have.members([1, 3]);
  });

  it('Returns an array after removing each kth element a long array', () => {
    const testTwoParamOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const testTwoParamTwo = 3;
    const testTwoResult = extractEachKth(testTwoParamOne, testTwoParamTwo);

    expect(testTwoResult).to.be.an('array');
    expect(testTwoResult).to.have.members([1, 2, 4, 5, 7, 8, 10]);
  });

  it('Returns null if the input array is empty', () => {
    const testThreeParamOne = [];
    const testThreeParamTwo = 2;
    const testThreeResult = extractEachKth(testThreeParamOne, testThreeParamTwo);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });
});
