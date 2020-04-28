// function getGrade(score1, score2, score3) {
//   var averageScore = (score1 + score2 + score3) / 3;

//   if (averageScore >= 90 && averageScore <= 100) return 'A';
//   else if (averageScore >= 80 && averageScore < 90) return 'B';
//   else if (averageScore >= 70 && averageScore < 80) return 'C';
//   else if (averageScore >= 60 && averageScore < 70) return 'D';
//   else if (averageScore >= 0 && averageScore < 60) return 'F';
// }

function getGrade(score1, score2, score3) {
  var averageScore = (score1 + score2 + score3) / 3;

  if (averageScore >= 90) return 'A';
  if (averageScore >= 80) return 'B';
  if (averageScore >= 70) return 'C';
  if (averageScore >= 60) return 'D';
  else return 'F';
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
