import addBorder from '../CodeSignal/addBorder.js';
import { expect } from 'chai';

describe('Given a rectangular matrix of characters, add a border of asterisks(*) to it.', () => {
  it('Returns an array with a border of * around the content', () => {
    const testOne = ['abc'];
    const testOneResult = addBorder(testOne);

    expect(testOneResult).to.be.a('array');
    expect(testOneResult).to.have.members(['*****', '*abc*', '*****']);
  });

  it('Returns an array with a border of * around multiple items in the array', () => {
    const testTwo = ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy'];
    const testTwoResult = addBorder(testTwo);

    expect(testTwoResult).to.be.a('array');
    expect(testTwoResult).to.have.members(['*******', '*abcde*', '*fghij*', '*klmno*', '*pqrst*', '*uvwxy*', '*******']);
  });

  it('Returns an array with a border of * if input includes *.', () => {
    const testThree = ['www**'];
    const testThreeResult = addBorder(testThree);

    expect(testThreeResult).to.be.a('array');
    expect(testThreeResult).to.have.members(['*******', '*www***', '*******']);

  });
  it('Returns null if the input is an empty array.', () => {
    const testThree = [];
    const testThreeResult = addBorder(testThree);

    expect(testThreeResult).to.be.a('null');
    expect(testThreeResult).to.equal(null);
  });
});
