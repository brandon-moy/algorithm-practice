import isIPv4Address from '../CodeSignal/isIPv4Address.js';
import { expect } from 'chai';

describe('Given a string, find out if it satisfies the IPv4 address naming rules.', () => {
  it('Returns a boolean if a string is a valid IPv4 address', () => {
    const testOne = '172.16.254.1';
    const testOneResult = isIPv4Address(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if a string is a valid IPv4 address', () => {
    const testTwo = '172.316.254.1';
    const testTwoResult = isIPv4Address(testTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns a boolean if a string is a valid IPv4 address', () => {
    const testThree = '.254.255.0';
    const testThreeResult = isIPv4Address(testThree);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(false);
  });

  it('Returns a boolean if a string is a valid IPv4 address', () => {
    const testFour = [172, 16, 254, 1];
    const testFourResult = isIPv4Address(testFour);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
