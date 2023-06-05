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

});
