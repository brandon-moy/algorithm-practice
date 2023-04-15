import checkPalindrome from '../CodeSignal/checkPalindrome.js';
import { expect } from 'chai';

describe('Given a string, check if it is a palindrome (the same word spelled backwards)', () => {
  it('Returns a true for the string aabaa', () => {
    const testOne = 'aabaa';
    const testOneResult = checkPalindrome(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns false for the string abac', () => {
    const testTwo = 'abac';
    const testTwoResult = checkPalindrome(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns true is the string is empty', () => {
    const testThree = '';
    const testThreeResult = checkPalindrome(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(true);
  });

  it('Returns null is  the input is not a string', () => {
    const testFour = 12345;
    const testFourResult = checkPalindrome(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
