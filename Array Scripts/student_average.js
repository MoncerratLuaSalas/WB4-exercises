// Given data: An array of student objects, each containing a name and an array of their scores.
let students = [
    {name: "Zephaniah", scores: [100, 96, 99, 92]},
    {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
    {name: "Siddalee", scores: [86, 72, 92]},
    {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
    {name: "Elisha", scores: [89, 100]},
    {name: "Ezra", scores: [100, 99, 100, 87]}
  ];
  
  // Function to calculate and print each student's average score.
  function printAverages(students) {
    // Outer loop: Iterate through each student in the 'students' array.
    for (let i = 0; i < students.length; i++) {
      // Retrieve the current student object from the array.
      let student = students[i];
      // Initialize a variable to accumulate the sum of the student's scores.
      let totalScore = 0;
  
      // Inner loop: Loop through the scores of the current student to calculate the total score.
      for (let j = 0; j < student.scores.length; j++) {
        // Add the current score to the total score.
        totalScore += student.scores[j];
      }
  
      // Calculate the average score by dividing the total score by the number of scores.
      let averageScore = totalScore / student.scores.length;
  
      // Print the student's name and their calculated average score to two decimal points.
      console.log(`${student.name}'s average score is: ${averageScore.toFixed(2)}`);
    }
  }
  
  // Execute the function to print each student's average score directly.
  printAverages(students);
  