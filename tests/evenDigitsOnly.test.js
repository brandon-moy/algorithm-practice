import evenDigitsOnly from '../CodeSignal/evenDigitsOnly.js';
import { expect } from 'chai';

describe('Return a boolean is all of the given integers are even', () => {
  it('Returns a boolean if all digits of the input are even.', () => {
    const testOne = 248622;
    const testOneResult = evenDigitsOnly(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if all digits of the input are even.', () => {
    const testTwo = 642386;
    const testTwoResult = evenDigitsOnly(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns a boolean if the input is 0', () => {
    const testThree = 0;
    const testThreeResult = evenDigitsOnly(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(true);
  });

  it('Returns null for falsy inputs that are not 0', () => {
    const testFour = null;
    const testFourResult = evenDigitsOnly(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
