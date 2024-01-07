function workingDay (input) {
    let workingHour = Number (input[0]);
    let day = input[1];
    

    switch (day) {
        case day = "Monday":
            if (workingHour >=10 && workingHour <= 18) {
                console.log ('open')
            } else {
                console.log ('closed')
            }
            break;
        case day = "Tuesday":
            if (workingHour >=10 && workingHour <= 18) {
                console.log ('open')
            } else {
                console.log ('closed')
            } 
            break;
        case day = "Wednesday":
            if (workingHour >=10 && workingHour <= 18) {
                console.log ('open')
            } else {
                console.log ('closed')
            }
            break;
        case day = "Thursday":
            if (workingHour >=10 && workingHour <= 18) {
                console.log ('open')
            } else {
                console.log ('closed')
            }
            break;
        case day = "Friday":
            if (workingHour >=10 && workingHour <= 18) {
                console.log ('open')
            } else {
                console.log ('closed')
            }
            break;
        case day ="Saturday":
            if (workingHour >=10 && workingHour <= 18) {
                console.log ('open')
            } else {
                console.log ('closed')
            }
            break;
        case day = "Sunday":
        console.log ("closed");
        break;
      

    }
}

workingDay (["11",

"Monday"]);