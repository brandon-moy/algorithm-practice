import { solution } from '../CodeSignal/absoluteValuesSumMinimization.js';
import { expect } from 'chai';

describe('Given a sorted array of integers a, your task is to determine which elements of a is closest to all other values of a', function () {
  it('Return an integer representing the elements from a that minimizes the sum of its aboslute differences ith all other elements', function () {
    const testCaseOne = [2, 4, 7];
    const testCaseOneResult = solution(testCaseOne);

    expect(testCaseOneResult).to.be.a('number');
    expect(testCaseOneResult).to.equal(4);
  });

  it('Returns null when given an empty array', function () {
    const emptyArray = [];
    const emptyArrayResult = solution(emptyArray);

    expect(emptyArrayResult).to.be.a('null');
    expect(emptyArrayResult).to.equal(null);
  });
});
