import alternatingSums from '../CodeSignal/alternatingSums.js';
import { expect } from 'chai';

describe('You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.', () => {
  it('Returns an array with the weights of the teams for a small team', () => {
    const testOne = [50, 60, 60, 45, 70];
    const testOneResult = alternatingSums(testOne);

    expect(testOneResult).to.be.a('array');
    expect(testOneResult).to.have.members([180, 105]);
  });

  it('Returns an array with the weights of teams for a large team', () => {
    const testTwo = [50, 90, 60, 45, 55, 50, 70, 30, 45, 100, 60, 70, 40, 45, 70, 50, 80, 60, 45, 70];
    const testTwoResult = alternatingSums(testTwo);

    expect(testTwoResult).to.be.a('array');
    expect(testTwoResult).to.have.members([575, 610]);
  });

  it('Returns an array with the combined team weights for an empty array', () => {
    const testThree = [];
    const testThreeResult = alternatingSums(testThree);

    expect(testThreeResult).to.be.a('array');
    expect(testThreeResult).to.have.members([0, 0]);
  });
});
