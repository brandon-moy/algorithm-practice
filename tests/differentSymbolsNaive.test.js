import differentSymbolsNaive from '../CodeSignal/differentSymbolsNaive.js';
import { expect } from 'chai';

describe('Given a string, find the number of different characters in it', () => {
  it('Returns the number of different characters in a short string', () => {
    const testOneParam = 'cabca';
    const testOneResult = differentSymbolsNaive(testOneParam);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(3);
  });

  it('Returns the number of different characters in a medium string', () => {
    const testTwoParam = 'cccccccc';
    const testTwoResult = differentSymbolsNaive(testTwoParam);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(1);
  });

  it('Returns the number of different characters in a long string', () => {
    const testThreeParam = 'learningfuze';
    const testThreeResult = differentSymbolsNaive(testThreeParam);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(10);
  });
});
