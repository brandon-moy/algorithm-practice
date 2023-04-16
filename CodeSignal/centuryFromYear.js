// Given a year, return the century it is in.The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

export default function centuryFromYear(year) {
  if (year <= 0 || typeof year !== 'number') return null;
  var century = year / 100; // 2 * 1 = 0(1)
  var checkCentury = Math.floor(century); // 3 * 1 = 0(1)
  if (century === checkCentury) { // 3 * 1 = 0(1)
    return checkCentury; // 1 * 1 = 0(1)
  } else {
    return checkCentury + 1; // 2 * 1 = 0(1)
  }
}

// Big O Notation = 0(1) constant time

centuryFromYear(1994);
