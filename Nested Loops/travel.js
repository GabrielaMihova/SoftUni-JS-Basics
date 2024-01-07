function travel(input) {
    let index = 0;
    let data = input[index];
    let destination = '';
    let travelBudget = 0;
    let AniesEarnings = 0;
    let AniesBudget = 0;
 
    while (data !== 'End') {
 
        if (data != Number(data)) {
            destination = data;
            if (destination) {
                travelBudget = Number(input[index + 1]);
                index++;
            }
        } else {
            AniesEarnings = Number(data);
            AniesBudget += AniesEarnings;
        }
 
        if (AniesBudget >= travelBudget) {
            console.log(`Going to ${destination}!`);
            AniesEarnings = 0;
            AniesBudget = 0;
            index++;
            data = input[index];
            continue;
        }
 
        index++;
        data = input[index];
    }
}


(["Greece",

"1000",

"200",

"200",

"300",

"100",

"150",

"240",

"Spain",

"1200",

"300",

"500",

"193",

"423",

"End"]);