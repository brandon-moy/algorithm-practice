import almostIncreasingSequence from '../CodeSignal/almostIncreasingSequence.js';
import { expect } from 'chai';

describe('Given a sequence of integers in an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array', () => {
  it('Returns a boolean if description can be achieved for array [1, 3, 2, 1]', () => {
    const testOne = [1, 3, 2, 1];
    const testOneResult = almostIncreasingSequence(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(false);
  });

  it('Returns a boolean if description can be achieved for array [1, 3, 2]', () => {
    const testTwo = [1, 3, 2];
    const testTwoResult = almostIncreasingSequence(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(true);
  });

  it('Returns true for an empty array', () => {
    const testThree = [];
    const testThreeResult = almostIncreasingSequence(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(true);
  });
});
