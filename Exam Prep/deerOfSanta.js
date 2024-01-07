function deerOfSanta (input) {
    daysOfMissingSanta = Number(input[0]);
    leftFoodKg = Number(input[1]);
    foodFirstDayKg = Number(input[2]);
    foodSecondDayKg = Number(input[3]);
    foodThirdDayKg = Number(input[4]);

    neededFoodFirstDeer = daysOfMissingSanta*foodFirstDayKg;
    neededFoodSecondDear = daysOfMissingSanta*foodSecondDayKg;
    neededFoodThirdDear = daysOfMissingSanta*foodThirdDayKg;
    totalNeededFood = neededFoodFirstDeer + neededFoodSecondDear + neededFoodThirdDear;

    if (totalNeededFood < leftFoodKg) {
        console.log(`${Math.floor(leftFoodKg-totalNeededFood)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(totalNeededFood-leftFoodKg)} more kilos of food are needed.`);
    }

}
deerOfSanta (["2",
    "10",
    "1",
    "1",
    "2"
    ]);