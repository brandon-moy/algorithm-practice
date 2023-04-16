import commonCharacterCount from '../CodeSignal/commonCharacterCount.js';
import { expect } from 'chai';

describe('Given two strings, find the number of common characters between them.', () => {
  it('Returns the number of common characters between short strings', () => {
    const testOneParam1 = 'abc';
    const testOneParam2 = 'adc';
    const testOneResult = commonCharacterCount(testOneParam1, testOneParam2);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(2);
  });

  it('Returns the number of common characters between long strings', () => {
    const testTwoParam1 = 'supercalifragilisticexpialidocious';
    const testTwoParam2 = 'Hippopotomonstrosesquippedaliophobia';
    const testTwoResult = commonCharacterCount(testTwoParam1, testTwoParam2);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(20);
  });

  it('Returns the number of common characters with one empty string', () => {
    const testThreeParam1 = '';
    const testThreeParam2 = 'adc';
    const testThreeResult = commonCharacterCount(testThreeParam1, testThreeParam2);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(0);
  });

  it('Returns null if either paramter is not a string', () => {
    const testOneParam1 = 5;
    const testOneParam2 = 'adc';
    const testOneResult = commonCharacterCount(testOneParam1, testOneParam2);

    expect(testOneResult).to.be.a('null');
    expect(testOneResult).to.equal(null);
  });
});
