import add from '../CodeSignal/add.js';
import { expect } from 'chai';

describe('Write a function that returns the sum of two numbers', () => {
  it('Returns the sum of positive integers', () => {
    const testOneParam1 = 1;
    const testOneParam2 = 2;
    const testOneResult = add(testOneParam1, testOneParam2);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(3);
  });

  it('Returns the sum of integers including 0', () => {
    const testTwoParam1 = 0;
    const testTwoParam2 = 1000;
    const testTwoResult = add(testTwoParam1, testTwoParam2);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(1000);
  });

  it('Returns the sum including a negative number', () => {
    const testThreeParam1 = 2;
    const testThreeParam2 = -39;
    const testThreeResult = add(testThreeParam1, testThreeParam2);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(-37);
  });

  it('Returns the sum of large numbers', () => {
    const testFourParam1 = 999;
    const testFourParam2 = 1000;
    const testFourResult = add(testFourParam1, testFourParam2);

    expect(testFourResult).to.be.a('number');
    expect(testFourResult).to.equal(1999);
  });

  it('Returns null if param1 or param2 are not a number', () => {
    const testFiveParam1 = undefined;
    const testFiveParam2 = 55;
    const testFiveResult = add(testFiveParam1, testFiveParam2);

    expect(testFiveResult).to.be.a('null');
    expect(testFiveResult).to.equal(null);
  });
});
