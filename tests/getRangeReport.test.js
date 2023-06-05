import getRangeReport from '../CodeSignal/getRangeReport.js';
import { expect } from 'chai';

describe('Define a function with two parameters start and end, it should return a function containing several properties of information', () => {
  it('Returns an object with properties total, odds, evens, range, and average', () => {
    const testOneParam1 = 1;
    const testOneParam2 = 5;
    const testOneResult = getRangeReport(testOneParam1, testOneParam2);

    expect(testOneResult).to.be.an('object');
    expect(testOneResult).to.have.property('total');
    expect(testOneResult.total).to.be.a('number');
    expect(testOneResult).to.have.property('odds');
    expect(testOneResult.odds).to.be.an('array');
    expect(testOneResult).to.have.property('evens');
    expect(testOneResult.evens).to.be.an('array');
    expect(testOneResult).to.have.property('range');
    expect(testOneResult.range).to.be.an('array');
    expect(testOneResult).to.have.property('average');
    expect(testOneResult.average).to.be.a('number');
  });

  it('Returns an object with the defined properties for close numbers', () => {
    const testTwoParam1 = 1;
    const testTwoParam2 = 2;
    const testTwoResult = getRangeReport(testTwoParam1, testTwoParam2);

    expect(testTwoResult.total).to.equal(3);
    expect(testTwoResult.odds).to.have.members([1]);
    expect(testTwoResult.evens).to.have.members([2]);
    expect(testTwoResult.range).to.have.members([1, 2]);
    expect(testTwoResult.average).to.equal(1.5);
  });

  it('Returns an object with the defined properties for medium distance numbers', () => {
    const testThreeParam1 = 5;
    const testThreeParam2 = 10;
    const testThreeResult = getRangeReport(testThreeParam1, testThreeParam2);

    expect(testThreeResult.total).to.equal(45);
    expect(testThreeResult.odds).to.have.members([5, 7, 9]);
    expect(testThreeResult.evens).to.have.members([6, 8, 10]);
    expect(testThreeResult.range).to.have.members([5, 6, 7, 8, 9, 10]);
    expect(testThreeResult.average).to.equal(7.5);
  });

  it('Returns an object with the defined properties for far distance numbers', () => {
    const testFourParam1 = 150;
    const testFourParam2 = 175;
    const testFourResult = getRangeReport(testFourParam1, testFourParam2);

    expect(testFourResult.total).to.equal(4225);
    expect(testFourResult.odds).to.have.members([151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 175]);
    expect(testFourResult.evens).to.have.members([150, 152, 154, 156, 158, 160, 162, 164, 166, 168, 170, 172, 174]);
    expect(testFourResult.range).to.have.members([150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175]);
    expect(testFourResult.average).to.equal(162.5);
  });
});
