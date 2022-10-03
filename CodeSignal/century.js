// Given a year, return the century it is in.The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function solution(year) {
  var century = year / 100;
  var checkCentury = Math.floor(century);
  if (century === checkCentury) {
    return checkCentury;
  } else {
    return checkCentury + 1;
  }
}

solution(1994);
