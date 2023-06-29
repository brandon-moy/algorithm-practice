import depositProfit from '../CodeSignal/depositProfit.js';
import { expect } from 'chai';

describe('You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you dont make any additional deposits, find out how long it would take for your balance to pass a specific threshold.', () => {
  it('Returns the number of years to pass a medium threshold with a small deposit and small rate', () => {
    const testOneParamOne = 20;
    const testOneParamTwo = 5;
    const testOneParamThree = 75;

    const testOneResult = depositProfit(testOneParamOne, testOneParamTwo, testOneParamThree);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(28);
  });

  it('Returns the number of years to pass a medium threshold with a small deposit and medium rate', () => {
    const testTwoParamOne = 15;
    const testTwoParamTwo = 20;
    const testTwoParamThree = 80;

    const testTwoResult = depositProfit(testTwoParamOne, testTwoParamTwo, testTwoParamThree);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(10);
  });

  it('Returns the number of years to pass a large threshold with a medium deposit and medium rate', () => {
    const testThreeParamOne = 100;
    const testThreeParamTwo = 20;
    const testThreeParamThree = 550;

    const testThreeResult = depositProfit(testThreeParamOne, testThreeParamTwo, testThreeParamThree);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(10);
  });
});
