function santasHoliday(input) {
    let totalDays = Number(input[0]);
    let type = input[1];
    let grade = input[2];

    let sum = 0;

    let nights = totalDays - 1;
    switch (type) {
        case "room for one person":
            sum = nights * 18.00;
            break;
        case "apartment":
            sum = nights * 25.00;
            if (nights < 10) {
                sum = sum * 0.70;
            } else if ( nights > 10 && nights < 15) {
                sum = sum*0.65;
            } else if (nights > 15) {
                sum = sum * 0.50;
            }
            break;
        case "president apartment":
            sum = nights * 35.00;
            if (nights < 10) {
                sum = sum * 0.90;
            } else if ( nights > 10 && nights < 15) {
                sum = sum*0.85;
            } else if (nights > 15) {
                sum = sum * 0.80;
            }
            break;
    }

    if (grade === "positive") {
        sum = sum + (sum*25)/100;
    } else {
        sum = sum * 0.90;
    }

    console.log(sum.toFixed(2));
}
santasHoliday(["14",
    "apartment",
    "positive"
]);