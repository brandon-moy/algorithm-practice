function solution(a) {
  var output = [];
  var team1 = 0;
  var team2 = 0;
  for (var i = 0; i < a.length; i++) {
    if (i % 2) {
      team2 += a[i];
    } else {
      team1 += a[i];
    }
  }
  output.push(team1);
  output.push(team2);
  return output;
}

solution([50, 60, 60, 45, 70]);

// take an array
// create an output array
// create two variables for team 1 and team 2
// iterate through the initial array
// if the iteration number is even, add the amount to team 1 sum
// if iteration number is odd, add amount to team 2 sum
// push the variabels into the output array
// return the output
