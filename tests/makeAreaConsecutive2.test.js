import makeAreaConsecutive2 from '../CodeSignal/makeArrayConsecutive2.js';
import { expect } from 'chai';

describe('Given an array of statues, return the number of statues needed to arrange them smallest to largest where the size difference is only 1 between each statue', () => {
  it('Returns the correct number of statues needed for array [6, 2, 3, 8]', () => {
    const testOne = [6, 2, 3, 8];
    const testOneResult = makeAreaConsecutive2(testOne);

    expect(testOneResult).to.be.a('number');
    expect(testOneResult).to.equal(3);
  });

  it('Returns the correct number of statues needed for array [0, 3]', () => {
    const testTwo = [0, 3];
    const testTwoResult = makeAreaConsecutive2(testTwo);

    expect(testTwoResult).to.be.a('number');
    expect(testTwoResult).to.equal(2);
  });

  it('Returns the correct number of statues needed for array [5, 4, 6]', () => {
    const testThree = [5, 4, 6];
    const testThreeResult = makeAreaConsecutive2(testThree);

    expect(testThreeResult).to.be.a('number');
    expect(testThreeResult).to.equal(0);
  });
});
