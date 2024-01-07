function graduation(input) {
    let studentName = input[0];
 
    let index = 1
    let total = 0
    let excluded = 0
    let grade = 0;
 
    while (index  < input.length) {
        let currentGrade = Number(input[index])
                if (currentGrade < 4){
                 console.log(`${studentName} has been excluded at ${index} grade`)
                  return;
                }
                if (currentGrade >= 4){
                  currentGrade = Number(input[index])   
                }
                total += currentGrade
        index++
        }
 
 
console.log(`${studentName} graduated. Average grade: ${(total / 12).toFixed(2)}`);
    }
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"]);