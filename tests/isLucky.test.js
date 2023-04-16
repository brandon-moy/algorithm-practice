import isLucky from '../CodeSignal/isLucky.js';
import { expect } from 'chai';

describe('Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.', () => {
  it('Returns a boolean if a short number ticket is lucky', () => {
    const testOne = 1230;
    const testOneResult = isLucky(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if a long number ticket is lucky', () => {
    const testTwo = 123045688312;
    const testTwoResult = isLucky(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns a boolean for a 0 number ticket', () => {
    const testThree = 0;
    const testThreeResult = isLucky(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(true);
  });

  it('Returns null if the input is not a number', () => {
    const testFour = 'Lucky';
    const testFourResult = isLucky(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
