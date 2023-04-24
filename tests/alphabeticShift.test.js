import alphabeticShift from '../CodeSignal/alphabeticShift.js';
import { expect } from 'chai';

describe('Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).', () => {
  it('Returns a shifted string for a short string.', () => {
    const testOne = 'crazy';
    const testOneResult = alphabeticShift(testOne);

    expect(testOneResult).to.be.a('string');
    expect(testOneResult).to.equal('dsbaz');
  });

  it('Returns a shifted string for a longer string.', () => {
    const testTwo = 'aaaabbbccd';
    const testTwoResult = alphabeticShift(testTwo);

    expect(testTwoResult).to.be.a('string');
    expect(testTwoResult).to.equal('bbbbcccdde');
  });

  it('Returns an empty string for a empty string.', () => {
    const testThree = '';
    const testThreeResult = alphabeticShift(testThree);

    expect(testThreeResult).to.be.a('string');
    expect(testThreeResult).to.equal('');
  });

  it('Returns a null for a non-string input.', () => {
    const testFour = undefined;
    const testFourResult = alphabeticShift(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
