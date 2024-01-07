function everest(input) {
    let days = 1;
    let meters = 5364;
    let index = 0;
    let command = input[index];
    index++;

    while (command !== `END`) {
        if (command === `Yes`) {
            days++;

            if (days > 5) {
                break;
            }
        }

        let dailyMeters = Number(input[index]);
        index++;
        meters += dailyMeters;

        if (meters >= 8848) {
            break;
        }

        command = (input[index]);
        index++;

    }

    if (meters >= 8848) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${meters}`);
    }
}

everest(["Yes",
    "1254",
    "Yes",
    "1402",
    "No",
    "250",
    "Yes",
    "635"
]);