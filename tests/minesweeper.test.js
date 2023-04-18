import minesweeper from '../CodeSignal/minesweeper.js';
import { expect } from 'chai';

describe('In the popular Minesweeper game you have a board with some mines and those cells that dont contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.', () => {
  it('Returns a matrix of numbers indicating how many surrounding mines there are.', () => {
    const testOne = [
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ];
    const testOneResult = minesweeper(testOne);

    expect(testOneResult).to.be.a('array');
    expect(testOneResult[0]).to.have.members([1, 2, 1]);
    expect(testOneResult[1]).to.have.members([2, 1, 1]);
    expect(testOneResult[2]).to.have.members([1, 1, 1]);
  });

  it('Returns a matrix of numbers indicating how many surrounding mines there are.', () => {
    const testTwo = [
      [true, false, false, true],
      [false, false, true, false],
      [true, true, false, true]
    ];
    const testTwoResult = minesweeper(testTwo);

    expect(testTwoResult).to.be.a('array');
    expect(testTwoResult[0]).to.have.members([0, 2, 2, 1]);
    expect(testTwoResult[1]).to.have.members([3, 4, 3, 3]);
    expect(testTwoResult[2]).to.have.members([1, 2, 3, 1]);
  });

  it('Returns a matrix of numbers indicating how many surrounding mines there are.', () => {
    const testThree = [
      [true, false],
      [true, false],
      [false, true],
      [false, false],
      [false, false]
    ];
    const testThreeResult = minesweeper(testThree);

    expect(testThreeResult).to.be.a('array');
    expect(testThreeResult[0]).to.have.members([1, 2]);
    expect(testThreeResult[1]).to.have.members([2, 3]);
    expect(testThreeResult[2]).to.have.members([2, 1]);
    expect(testThreeResult[3]).to.have.members([1, 1]);
    expect(testThreeResult[4]).to.have.members([0, 0]);
  });
});
