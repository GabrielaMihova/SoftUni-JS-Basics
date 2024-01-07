function examPreparation(input) {
 
    let badResultsPermitted = Number(input[0]);
    let badResultsCounter = 0;
    let goodResultsCounter = 0;
    let resultsTotalSum = 0;
    let gradeCount = 0;
    let lastProblem = '';
    let index = 1;
 
 
    while (input[index] !== "Enough") {
        let grade = Number(input[index + 1]);
        resultsTotalSum = resultsTotalSum + grade;
        gradeCount++;
        lastProblem = input[index];
 
        if (grade <= 4) {
            badResultsCounter++;
            if (badResultsCounter === badResultsPermitted) {
                console.log(`You need a break, ${badResultsCounter} poor grades.`);
                break;
            }
        } else if (grade > 4) {
            goodResultsCounter++;
 
        }
 
 
        index += 2;
    }
    if (input[index] === 'Enough') {
        let average = resultsTotalSum / gradeCount;
        console.log(`Average score: ${average.toFixed(2)}`);
        console.log(`Number of problems: ${gradeCount}`);
        console.log(`Last problem: ${lastProblem}`);
    }
 
 

}examPreparation (["3","Money","6","Story","4","SpringTime","5","Bus","6","Enough"]);