import centuryFromYear from '../CodeSignal/centuryFromYear.js';
import { expect } from 'chai';

describe('Given a year, return the century it is in. The century spans from 1 to 100 before starting the next century.', () => {
  it('Returns the correct century for a positive integer year', () => {
    const testOneYear = 1905;
    const testOneResult = centuryFromYear(testOneYear);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(20);
  });

  it('Returns the correct century for positive integer year', () => {
    const testTwoYear = 1700;
    const testTwoResult = centuryFromYear(testTwoYear);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(17);
  });

  it('Returns null if the input is a negative integer year', () => {
    const testThreeYear = -1988;
    const testThreeResult = centuryFromYear(testThreeYear);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });

  it('Returns null if the input is not a number', () => {
    const testFourYear = 'Nineteen Ninety-Four';
    const testFourResult = centuryFromYear(testFourYear);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
