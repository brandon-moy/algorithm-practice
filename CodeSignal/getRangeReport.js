export default function getRangeReport(start, end) {
  let total = 0;
  const odds = [];
  const evens = [];
  const range = [];

  for (let num = start; num <= end; num++) {
    if (num % 2 === 0) evens.push(num);
    else odds.push(num);
    range.push(num);
    total += num;
  }

  const average = total / range.length;

  const rangeReport = {
    total,
    odds,
    evens,
    range,
    average
  };

  return rangeReport;
}
