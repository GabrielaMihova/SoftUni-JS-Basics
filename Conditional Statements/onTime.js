function exam(input) { 
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]); 
    let arrivalHour = Number(input[2]);;
    let arrivalMinute = Number(input[3]); 

    let totalExam = (examHour*60) + examMinutes; 
    let totalArrival = (arrivalHour * 60) + arrivalMinute; 
    
    if (totalArrival > totalExam) {
        console.log("Late")
        let difference = Math.abs(totalArrival - totalExam); 
        if (difference < 60) { 
            if (difference < 10) { 
                console.log(difference + " minutes after the start");
            }
            else { 
                console.log(difference + " minutes after the start");
            }
        }
        else { 
            let finalMinutes = difference % 60; 
            let finalHours = Math.floor(difference / 60);
            if (finalMinutes < 10) { 
                console.log(finalHours + ":0" + finalMinutes+ " hours after the start");
            } 
            else { 
                console.log(finalHours + ":" + finalMinutes+ " hours after the start");
            }
           
        }
    }
    else if ( (totalExam - totalArrival) > 30 ) {
        console.log("Early");
        let difference = Math.abs(totalExam - totalArrival); 
        if (difference < 60) { 
            if (difference < 10) { 
                console.log("0" + difference + " minutes before the start");
            }
            else { 
                console.log(difference + " minutes before the start");
            }
        }
        else { 
            let finalMinutes = difference % 60; 
            let finalHours = Math.floor(difference / 60);
            if (finalMinutes < 10) { 
                console.log(finalHours + ":0" + finalMinutes+ " hours before the start");
            } 
            else { 
                console.log(finalHours + ":" + finalMinutes+ " hours before the start");
            }
           
        }
    }
 
    else { 
        console.log("On Time");
        let difference = Math.abs(totalArrival - totalExam); 
        if (difference < 60) { 
            if (difference < 10 && difference !== 0) { 
                console.log(difference + " minutes before the start");
            }
            else if (difference == 0 ) { 
 
            }
            else { 
                console.log(difference + " minutes before the start");
            }
        }
       
    }
}
exam (["11",
"30", "12", "29"])


;