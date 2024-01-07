function movieProfit (input) {
    let movieName = input[0];
    let daysCount = Number(input[1]);
    let ticketsCount = Number (input[2]);
    let ticketsPrice = Number (input[3]);
    let cinemaPercentage = Number (input[4]);

    let totalTicketPrice = ticketsCount*ticketsPrice;
    let totalProfit = daysCount*totalTicketPrice;
    let percentage = (totalProfit*cinemaPercentage)/100;
    let totalMovieProfit = totalProfit - percentage;

    console.log(`The profit from the movie ${movieName} is ${totalMovieProfit} lv.`);
}
movieProfit (["The Programmer", 20, 500, 7.50, 7]);