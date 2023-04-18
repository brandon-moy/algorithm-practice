import avoidObstacles from '../CodeSignal/avoidObstacles.js';
import { expect } from 'chai';

describe('You are given an array of integers representing coordinates of obstacles situated on a straight line. Find the minimal length of the jump enough to avoid all the obstacles.', () => {
  it('Returns a number of minimum number of jumps', () => {
    const testOne = [5, 3, 6, 7, 9];
    const testOneResult = avoidObstacles(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(4);
  });

  it('Returns a number of minimum number of jumps', () => {
    const testTwo = [2, 3];
    const testTwoResult = avoidObstacles(testTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(4);
  });

  it('Returns a number of minimum number of jumps', () => {
    const testThree = [1, 4, 10, 6, 2];
    const testThreeResult = avoidObstacles(testThree);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(7);
  });
});
