// function getAverage(scores) {
//   let sum = 0
//   let numScores = scores.length;

//   for (let i = 0; i < numScores; i++) {
//     sum += scores[i];
//   }

//   return sum;
// }

// let myScores = [92, 98, 84, 76, 89, 99, 100];
// let yourScores = [82, 98, 94, 88, 92, 100, 100];

// let avgScore = getAverage(myScores);
// let medianScore = avgScore / 7;

// console.log(`My average score is ${medianScore}`)

// avgScore = getAverage(yourScores);
// medianScore = avgScore / 7;

// console.log(`Your average score is ${medianScore}`);


///////////////////////////// REVISED CODE ///////////////////////////////////

function getAverage(scores) {
    let sum = 0;
    let numScores = scores.length; 
  
    for (let i = 0; i < numScores; i++) {
      sum += scores[i];
    }
  
    // Calculate the average by dividing the sum by the number of scores
    let average = sum / numScores; // <------------- Add and divide INSIDE OF FUNCTION rather than at the end like done previously.
     // WAY easier IMO.
    return average; // Return the calculated average
  }
  
  // Define arrays of scores
  let myScores = [92, 98, 84, 76, 89, 99, 100];
  let yourScores = [82, 98, 94, 88, 92, 100, 100];
  
  // Calculate average score for myScores
  let avgScoreMy = getAverage(myScores);
  console.log(`My average score is ${avgScoreMy.toFixed(2)}`); // Display average score for myScores
  
  // Calculate average score for yourScores
  let avgScoreYour = getAverage(yourScores);
  console.log(`Your average score is ${avgScoreYour.toFixed(2)}`); // Display average score for yourScores
  