function familyVacation (input) {
    let budget = Number (input[0]);
    let nights = Number (input[1]);
    let nightsPrice = Number (input[2]);
    let additionalCosts = Number (input[3]);

    if (nights > 7) {
        nightsPrice = nightsPrice * 0.95;
    }

    let finalNightsPrice = nightsPrice*nights;
    let finalBudget = budget * additionalCosts/100;
    let finalPrice = budget - (finalNightsPrice + finalBudget);
    
    if (finalPrice >= budget) {
        console.log(`Ivanovi will be left with ${finalPrice.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${((finalNightsPrice + finalBudget) - budget).toFixed(2)} leva needed.`);
    }
}
familyVacation ([500,

    7,
    
    66,
    
    15])