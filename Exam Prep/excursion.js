function excursion (input) {
    let peopleCount = Number (input[0]);
    let nightsCount = Number (input[1]);
    let transportCount = Number(input[2]);
    let museumTickets = Number(input[3]);

    let nightsPrice = 20.00;
    let transportPrice = 1.60;
    let museumPrice = 6.00;

    let nightsSumPerPerson = nightsPrice*nightsCount;
    let totalTransportPrice = transportCount*transportPrice;
    let museumTotalPrice = museumPrice*museumTickets;
    let totalSumPerPerson = nightsSumPerPerson+totalTransportPrice+museumTotalPrice;
    let totalGroupSum = peopleCount*totalSumPerPerson;
    let additionalCosts = totalGroupSum + (totalGroupSum*25)/100;

    console.log(additionalCosts.toFixed(2));
}
excursion (["20",
    "14",
    "30",
    "6"    ]);