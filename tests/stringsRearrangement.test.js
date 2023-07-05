import stringsRearrangement from '../CodeSignal/stringsRearrangement.js';
import { expect } from 'chai';

describe("Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.", () => {
  it('Returns a boolean if the array can be rearranged for a short array', () => {
    const testOneParamOne = ['aba', 'bbb', 'bab'];
    const testOneResult = stringsRearrangement(testOneParamOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(false);
  });

  it('Returns a boolean if the array can be rearranged for a longer array', () => {
    const testTwoParamOne = ['aba', 'bbb', 'bab', 'aaa', 'abb', 'baa'];
    const testTwoResult = stringsRearrangement(testTwoParamOne);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(true);
  });

  it('Returns null if the input array is empty', () => {
    const testThreeParamOne = [];
    const testThreeResult = stringsRearrangement(testThreeParamOne);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });
});
