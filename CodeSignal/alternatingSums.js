function solution(a) {
  var output = []; // 1 * 1 = 0(1)
  var team1 = 0; // 1 * 1 = 0(1)
  var team2 = 0; // 1 * 1 = 0(1)
  for (
    var i = 0; // 1 * 1 = 0(1)
    i < a.length; // 2 * n = 0(2n) ~= 0(n)
    i++) { // 2 * n = 0(2n) ~= 0(n)
    if (i % 2) { // 3 * n = 0(3n) ~= 0(n)
      team2 += a[i]; // 3 * n = 0(3n) ~= 0(n)
    } else {
      team1 += a[i]; // 3 * n = 0(3n) ~= 0(n)
    }
  }
  output.push(team1); // 2 * 1 = 0(2) ~= 0(1)
  output.push(team2); // 2 * 1 = 0(2) ~= 0(1)
  return output; // 1 * 1 = 0(1)
}

// Big O Notation: 0(n) linear time

solution([50, 60, 60, 45, 70]);

// take an array
// create an output array
// create two variables for team 1 and team 2
// iterate through the initial array
// if the iteration number is even, add the amount to team 1 sum
// if iteration number is odd, add amount to team 2 sum
// push the variabels into the output array
// return the output
