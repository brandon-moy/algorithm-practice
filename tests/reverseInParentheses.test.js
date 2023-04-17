import reverseInParentheses from '../CodeSignal/reverseInParenthesis.js';
import { expect } from 'chai';

describe('Write a function that reverses characters in (possibly nested) parentheses in the input string.', () => {
  it('Returns a string with the characters in parentheses reversed.', () => {
    const testOne = '(bar)';
    const testOneResult = reverseInParentheses(testOne);

    expect(testOneResult).to.be.a('string');
    expect(testOneResult).to.equal('rab');
  });

  it('Returns a combined string with only the characters in parentheses reversed.', () => {
    const testTwo = 'foo(bar)baz';
    const testTwoResult = reverseInParentheses(testTwo);

    expect(testTwoResult).to.be.a('string');
    expect(testTwoResult).to.equal('foorabbaz');
  });

  it('Returns a combined string with multiple sets of characters in parentheses reversed.', () => {
    const testThree = 'foo(bar)baz(blim)';
    const testThreeResult = reverseInParentheses(testThree);

    expect(testThreeResult).to.be.a('string');
    expect(testThreeResult).to.equal('foorabbazmilb');
  });

  it('Returns a combined strings with nested sets of characters in parentheses', () => {
    const testFour = 'foo(bar(baz))blim';
    const testFourResult = reverseInParentheses(testFour);

    expect(testFourResult).to.be.a('string');
    expect(testFourResult).to.equal('foobazrabblim');
  });

  it('Returns an empty string if the input string is empty', () => {
    const testFive = '';
    const testFiveResult = reverseInParentheses(testFive);

    expect(testFiveResult).to.be.a('string');
    expect(testFiveResult).to.equal('');
  });

  it('Returns null if the input is not a string', () => {
    const testSix = 6;
    const testSixResult = reverseInParentheses(testSix);

    expect(testSixResult).to.be.a('null');
    expect(testSixResult).to.equal(null);
  });
});
