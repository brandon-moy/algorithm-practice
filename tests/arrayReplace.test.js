import arrayReplace from '../CodeSignal/arrayReplace.js';
import { expect } from 'chai';

describe('Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.', () => {
  it('Replaces elemToReplace with substitutionElem for one occurence in input', () => {
    const testOne = [1, 2, 3];
    const testOneReplace = 1;
    const testOneSub = 3;
    const testOneResult = arrayReplace(testOne, testOneReplace, testOneSub);

    expect(testOneResult).to.be.a('array');
    expect(testOneResult).to.have.members([3, 2, 3]);
  });

  it('Replaces all occurences of elemToReplace with substitutionElem', () => {
    const testTwo = [1, 2, 1, 6, 1, 3, 4, 8, 8, 9, 1, 3];
    const testTwoReplace = 1;
    const testTwoSub = 5;
    const testTwoResult = arrayReplace(testTwo, testTwoReplace, testTwoSub);

    expect(testTwoResult).to.be.a('array');
    expect(testTwoResult).to.have.members([5, 2, 5, 6, 5, 3, 4, 8, 8, 9, 5, 3]);
  });

  it('Replaces all occurences of elemToReplace with substitutionElem', () => {
    const testThree = [1, 2, 3, 4];
    const testThreeReplace = 7;
    const testThreeSub = 5;
    const testThreeResult = arrayReplace(testThree, testThreeReplace, testThreeSub);

    expect(testThreeResult).to.be.a('array');
    expect(testThreeResult).to.have.members([1, 2, 3, 4]);
  });

  it('Returns an empty array if the input is an empty array', () => {
    const testFour = [];
    const testFourReplace = 7;
    const testFourSub = 5;
    const testFourResult = arrayReplace(testFour, testFourReplace, testFourSub);

    expect(testFourResult).to.be.a('array');
    expect(testFourResult).to.have.members([]);
  });
});
