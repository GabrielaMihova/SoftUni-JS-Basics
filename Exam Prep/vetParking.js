function vetParking(input) {
    let daysCount = Number(input[0]);
    let hoursPerDay = Number(input[1]);

    let total = 0;

    for (let currentDay = 1; currentDay <= daysCount; currentDay++) {

        let tollPerDay = 0;

        for (let currentHour = 1; currentHour <= hoursPerDay; currentHour++) {

            let isDayEven = currentDay % 2 === 0;
            let isHourEven = currentHour % 2 === 0;

            let toll = 0;

            if (isDayEven && !isHourEven) {
                toll = 2.50;
            } else if (!isDayEven && isHourEven) {
                toll = 1.25;
            } else {
                toll = 1.00;
            }

            tollPerDay += toll;
        }

        console.log(`Day: ${currentDay} - ${tollPerDay.toFixed(2)} leva`);
        total += tollPerDay;
    }

    console.log(`Total: ${total.toFixed(2)} leva`);
}
vetParking(["2",

    "5"]);