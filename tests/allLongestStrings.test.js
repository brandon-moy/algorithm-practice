import allLongestString from '../CodeSignal/allLongestString.js';
import { expect } from 'chai';

describe('Given an array of strings, return another array containing all of its longest strings.', () => {
  it('Returns an array of the longest strings from a short array', () => {
    const testOne = ['aba', 'aa', 'ad', 'vcd', 'aba'];
    const testOneResult = allLongestString(testOne);

    expect(testOneResult).to.be.a('array');
    // tests for entire array
    // expect(testOneResult).to.have.members(['aba', 'vcd', 'aba']);

    // tests each item individually
    expect(testOneResult[0]).to.equal('aba');
    expect(testOneResult[1]).to.equal('vcd');
    expect(testOneResult[2]).to.equal('aba');
  });

  it('Returns an array of the longest strings from a long array', () => {
    const testTwo = ['aba', 'aa', 'ad', 'vcd', 'aba', 'aba', 'aa', 'ad', 'vcd', 'aba'];
    const testTwoResult = allLongestString(testTwo);

    expect(testTwoResult).to.be.a('array');
    expect(testTwoResult).to.have.members(['aba', 'vcd', 'aba', 'aba', 'vcd', 'aba']);
  });

  it('Returns an empty array if the input is an empty array', () => {
    const testThree = [];
    const testThreeResult = allLongestString(testThree);

    expect(testThreeResult).to.be.a('array');
    expect(testThreeResult).to.have.members([]);
  });

  it('Returns null if any index in the array is not a string', () => {
    const testFour = ['aba', 'aa', 4, 'vcd', 'aba'];
    const testFourResult = allLongestString(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
