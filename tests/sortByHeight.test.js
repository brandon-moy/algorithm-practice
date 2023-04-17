import sortByHeight from '../CodeSignal/sortByHeight.js';
import { expect } from 'chai';

describe('Rearrange a list of integers by height but if the integer is -1, it should not move', () => {
  it('Returns a sort list of integers without moving any -1s', () => {
    const testOne = [-1, 150, 190, 170, -1, -1, 160, 180];
    const testOneResult = sortByHeight(testOne);

    expect(testOneResult).to.be.a('array');
    expect(testOneResult).to.have.members([-1, 150, 160, 170, -1, -1, 180, 190]);
  });

  it('Returns null if the input array is empty', () => {
    const testTwo = [];
    const testTwoResult = sortByHeight(testTwo);

    expect(testTwoResult).to.be.a('null');
    expect(testTwoResult).to.equal(null);
  });

  it('Returns null if the input is not an array', () => {
    const testThree = 'array';
    const testThreeResult = sortByHeight(testThree);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });
});
