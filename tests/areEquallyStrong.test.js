import areEquallyStrong from '../CodeSignal/areEquallyStrong.js';
import { expect } from 'chai';

describe('Call two arms equally strong if the heaviest weights they each are able to lift are equal. Determine if two people are equally strong if both strongest and weakest arems are equal.', () => {
  it('Returns a boolean for if a set of inputs are equally strong', () => {
    const testOneParamOne = 10;
    const testOneParamTwo = 15;
    const testOneParamThree = 15;
    const testOneParamFour = 10;
    const testOneResult = areEquallyStrong(testOneParamOne, testOneParamTwo, testOneParamThree, testOneParamFour);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean for if a set of inputs are equally strong', () => {
    const testTwoParamOne = 25;
    const testTwoParamTwo = 5;
    const testTwoParamThree = 5;
    const testTwoParamFour = 25;
    const testTwoResult = areEquallyStrong(testTwoParamOne, testTwoParamTwo, testTwoParamThree, testTwoParamFour);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(true);
  });

  it('Returns a boolean for if a set of inputs are equally strong', () => {
    const testThreeParamOne = 15;
    const testThreeParamTwo = 20;
    const testThreeParamThree = 15;
    const testThreeParamFour = 20;
    const testThreeResult = areEquallyStrong(testThreeParamOne, testThreeParamTwo, testThreeParamThree, testThreeParamFour);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(true);
  });

  it('Returns null if any of the inputs are not numbers', () => {
    const testFourParamOne = 15;
    const testFourParamTwo = 20;
    const testFourParamThree = NaN;
    const testFourParamFour = 20;
    const testFourResult = areEquallyStrong(testFourParamOne, testFourParamTwo, testFourParamThree, testFourParamFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });

  it('Returns null if any of the inputs are not numbers', () => {
    const testFiveParamOne = 15;
    const testFiveParamTwo = 20;
    const testFiveParamThree = 'fifteen';
    const testFiveParamFour = 20;
    const testFiveResult = areEquallyStrong(testFiveParamOne, testFiveParamTwo, testFiveParamThree, testFiveParamFour);

    expect(testFiveResult).to.be.a('null');
    expect(testFiveResult).to.equal(null);
  });
});
