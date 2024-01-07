function gymnastics(input) {
    let country = input[0];
    let appliance = input[1];
    let execution = 0;
    let difficulty = 0;

    switch (country) {
        case "Bulgaria":
            if (appliance === "ribbon") {
                difficulty = 9.600;
                execution = 9.400;
            } else if (appliance=== "hoop") {
                difficulty = 9.550;
                execution = 9.750;
            } else if (appliance === "rope") {
                difficulty = 9.500;
                execution = 9.400;
            } break;
        case "Russia":
            if (appliance=== "ribbon") {
                difficulty = 9.100;
                execution = 9.400;
            } else if (appliance === "hoop") {
                difficulty = 9.300;
                execution = 9.800;
            } else if (appliance === "rope") {
                difficulty = 9.600;
                execution = 9.000;
            } break;
        case "Italy":
            if (appliance === "ribbon") {
                difficulty = 9.200;
                execution = 9.500;
            } else if (appliance === "hoop") {
                difficulty = 9.450;
                execution = 9.350;
            } else if (appliance === "rope") {
                difficulty = 9.700;
                execution = 9.150;
            } break;
    }

    let totalPoints = execution + difficulty;
    let percentage = ((20 - totalPoints)/20)*100;

    console.log(`The team of ${country} get ${totalPoints.toFixed(3)} on ${appliance}.`);
    console.log(`${percentage.toFixed(2)}%`);
}
gymnastics(["Bulgaria", "ribbon"]);