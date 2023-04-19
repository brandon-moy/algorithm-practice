import { variableName, isDigit, isUnderscore, isLetter } from '../CodeSignal/variableName.js';
import { expect } from 'chai';

describe('Check if the given input is a valid digit 0 - 9', () => {
  it('Returns a boolean if the input is a valid digit', () => {
    const testThree = 5;
    const testThreeResult = isDigit(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(true);
  });

  it('Returns a boolean if the input is a valid digit', () => {
    const testTwo = 3;
    const testTwoResult = isDigit(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(true);
  });

  it('Returns a boolean if the input is a valid digit', () => {
    const testThree = 's';
    const testThreeResult = isDigit(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(false);
  });
});

describe('Check is the given input is an _', () => {
  it('Returns a boolean if the input is an _', () => {
    const testOne = 'a';
    const testOneResult = isUnderscore(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(false);
  });

  it('Returns a boolean if the input is an _', () => {
    const testOne = '_';
    const testOneResult = isUnderscore(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if the input is an _', () => {
    const testTwo = 8;
    const testTwoResult = isUnderscore(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });
});

describe('Check if the given input is a valid character', () => {
  it('Returns a boolean if the input is a valid character', () => {
    const testOne = 'a';
    const testOneResult = isLetter(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if the input is a valid character', () => {
    const testTwo = 8;
    const testTwoResult = isLetter(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns a boolean if the input is a valid character', () => {
    const testThree = null;
    const testThreeResult = isLetter(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(false);
  });
});

describe('Correct variable names consist only of English letters, digits and underscores and they cant start with a digit. Check if the given string is a correct variable name.', () => {
  it('Returns a boolean if the given input is a valid variable name', () => {
    const testOne = 'var_1_Int';
    const testOneResult = variableName(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if the given input is a valid variable name', () => {
    const testTwo = 'qq-q';
    const testTwoResult = variableName(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns a boolean if the given input is a valid variable name', () => {
    const testThree = '2w2';
    const testThreeResult = variableName(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(false);
  });

  it('Returns a boolean if the given input is a valid variable name when the input is an empty string', () => {
    const testFour = '';
    const testFourResult = variableName(testFour);

    expect(testFourResult).to.be.a('boolean');
    expect(testFourResult).to.equal(false);
  });

  it('Returns null if the given input is a valid variable name when the input is not a string', () => {
    const testFour = false;
    const testFourResult = variableName(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
