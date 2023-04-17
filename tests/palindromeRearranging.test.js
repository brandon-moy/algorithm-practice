import palindromeRearranging from '../CodeSignal/palindromeRearranging.js';
import { expect } from 'chai';

describe('Given a string, find out if its characters can be rearranged to form a palindrome.', () => {
  it('Returns a boolean if a short string can become a palindrome', () => {
    const testOne = 'aabb';
    const testOneResult = palindromeRearranging(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if a long string can become a palindrome', () => {
    const testTwo = 'aabbasddssdacca';
    const testTwoResult = palindromeRearranging(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns null if the input is an empty string', () => {
    const testThree = '';
    const testThreeResult = palindromeRearranging(testThree);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });
});
