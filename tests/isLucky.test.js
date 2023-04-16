import isLucky from '../CodeSignal/isLucky.js';
import { expect } from 'chai';

describe('Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.', () => {
  it('It returns a boolean if a short number ticket is lucky', () => {
    const testOne = 1230;
    const testOneResult = isLucky(testOne);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });
});
