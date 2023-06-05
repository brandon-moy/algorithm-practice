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

  // it('Returns an object with the defined properties for clsoe numbers', () => {
  //   const testTwoParam1 = 1;
  //   const testTwoParam2 = 2;
  //   const testTwoResult = getRangeReport(testTwoParam1, testTwoParam2);

  //   expect(testTwoResult.totall).to.be.a('number');
  //   expect(testTwoResult.total).to.equal(6);
  //   expect(testTwoResult.odds).to.be.an('array');
  //   expect(testTwoResult).to.be.an('object');
  //   expect(testTwoResult.evens).to.be.an('array');
  //   expect(testTwoResult.range).to.be.an('array');
  //   expect(testTwoResult).to.be.an('object');
  // })
});
