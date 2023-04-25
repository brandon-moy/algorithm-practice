import chessBoardCellColor from '../CodeSignal/chessBoardCellColor.js';
import { expect } from 'chai';

describe('Given two cells on the standard chess board, determine whether they have the same color or not.', () => {
  it('Returns a boolean if to cells have the same color.', () => {
    const testOneCellOne = 'A1';
    const testOneCellTwo = 'C3';
    const testOneResult = chessBoardCellColor(testOneCellOne, testOneCellTwo);

    expect(testOneResult).to.be.a('boolean');
    expect(testOneResult).to.equal(true);
  });

  it('Returns a boolean if to cells have the same color.', () => {
    const testTwoCellOne = 'A1';
    const testTwoCellTwo = 'A2';
    const testTwoResult = chessBoardCellColor(testTwoCellOne, testTwoCellTwo);

    expect(testTwoResult).to.be.a('boolean');
    expect(testTwoResult).to.equal(false);
  });

  it('Returns a boolean if to cells have the same color.', () => {
    const testThreeCellOne = 'A1';
    const testThreeCellTwo = 'H3';
    const testThreeResult = chessBoardCellColor(testThreeCellOne, testThreeCellTwo);

    expect(testThreeResult).to.be.a('boolean');
    expect(testThreeResult).to.equal(false);
  });

  it('Returns null if any input is not a string.', () => {
    const testFourCellOne = 'A1';
    const testFourCellTwo = true;
    const testFourResult = chessBoardCellColor(testFourCellOne, testFourCellTwo);

    expect(testFourResult).to.be.a('null');
    expect(testFourResult).to.equal(null);
  });
});
