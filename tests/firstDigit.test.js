import firstDigit from '../CodeSignal/firstDigit.js';
import { expect } from 'chai';

describe('Find the leftmost digit that occurs in a given string', () => {
  it('Returns the first digit it finds in a short string', () => {
    const testOneParam = 'abc1';
    const testOneResult = firstDigit(testOneParam);

    expect(testOneResult).to.be.a('string');
    expect(testOneResult).to.equal('1');
  });

  it('Returns the first digit it finds in a medium string', () => {
    const testTwoParam = 'abcde4fgh8ij';
    const testTwoResult = firstDigit(testTwoParam);

    expect(testTwoResult).to.be.a('string');
    expect(testTwoResult).to.equal('4');
  });

  it('Returns the first digit it finds in a long string', () => {
    const testThreeParam = 'abcde801fgh13ij4kl63mn3098opq34rs';
    const testThreeResult = firstDigit(testThreeParam);

    expect(testThreeResult).to.be.a('string');
    expect(testThreeResult).to.equal('8');
  });

  it('Returns null if it does not find a digit in a string', () => {
    const testFourParam = 'abcdefghijklmnop';
    const testFourResult = firstDigit(testFourParam);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
