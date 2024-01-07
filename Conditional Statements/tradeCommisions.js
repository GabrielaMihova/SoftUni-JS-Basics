function tradeCommisions (input) {
    let townName = input [0];
    let salesNum = Number (input [1]);

    let priceTotal = 0;

   if (townName == "Sofia") {
    if (salesNum >= 0 && salesNum <= 500) {
 priceTotal = salesNum * 0.05;
 console.log (priceTotal.toFixed(2));

    } else if (salesNum >500 && salesNum <=1000) {
        priceTotal = salesNum * 0.07;
        console.log (priceTotal.toFixed(2));

    } else if (salesNum >1000 && salesNum <=10000) {
        priceTotal = salesNum * 0.08;
        console.log (priceTotal.toFixed(2));

    } else if (salesNum >10000) {
        priceTotal = salesNum*0.12;
        console.log (priceTotal.toFixed(2));

    } else if (salesNum < 0) {
        console.log ('error')
    }

} else if (townName == "Plovdiv") {
    if (salesNum >= 0 && salesNum <= 500) {
        priceTotal = salesNum * 0.055;
        console.log (priceTotal.toFixed(2));

           } else if (salesNum >500 && salesNum <=1000) {
               priceTotal = salesNum * 0.08;
               console.log (priceTotal.toFixed(2));

           } else if (salesNum >1000 && salesNum <=10000) {
               priceTotal = salesNum * 0.12;
               console.log (priceTotal.toFixed(2));

           } else if (salesNum >10000) {
               priceTotal = salesNum*0.145;
               console.log (priceTotal.toFixed(2));

           } else if (salesNum < 0) {
            console.log ('error')
        }
} else if (townName == "Varna") {
    if (salesNum >= 0 && salesNum <= 500) {
        priceTotal = salesNum * 0.045;
        console.log (priceTotal.toFixed(2));

           } else if (salesNum >500 && salesNum <=1000) {
               priceTotal = salesNum * 0.075;
               console.log (priceTotal.toFixed(2));

           } else if (salesNum >1000 && salesNum <=10000) {
               priceTotal = salesNum * 0.1;
               console.log (priceTotal.toFixed(2));

           } else if (salesNum >10000) {
               priceTotal = salesNum*0.13;
               console.log (priceTotal.toFixed(2));

           } else if (salesNum < 0) {
            console.log ('error')
        }

} else if (townName != 'Sofia' && townName != 'Varna' && townName != 'Plovdiv') {
    console.log ('error')
}






}
tradeCommisions (["Bourgas",

" 1500"])