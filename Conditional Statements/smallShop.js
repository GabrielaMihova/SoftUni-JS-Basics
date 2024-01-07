function smallShop (input) {
    let productName = input [0];
    let townName = input [1];
    let quantity = Number (input [2]);

    let priceTotal = 0;

   if (townName == "Sofia") {
    if (productName == "coffee") {
 priceTotal = quantity * 0.50;
    } else if (productName == "water") {
        priceTotal = quantity * 0.80;

    } else if (productName == "beer") {
        priceTotal = quantity * 1.20;

    } else if (productName == "sweets") {
        priceTotal = quantity * 1.45;

    } else if (productName == "peanuts") {
        priceTotal = quantity * 1.60;

    }

} else if (townName == "Plovdiv") {
    if (productName == "coffee") {
        priceTotal = quantity * 0.40;
           } else if (productName == "water") {
               priceTotal = quantity * 0.70;
       
           } else if (productName == "beer") {
               priceTotal = quantity * 1.15;
       
           } else if (productName == "sweets") {
               priceTotal = quantity * 1.30;
       
           } else if (productName == "peanuts") {
               priceTotal = quantity * 1.50;
       
           }
} else if (townName == "Varna") {
    if (productName == "coffee") {
        priceTotal = quantity * 0.45;
           } else if (productName == "water") {
               priceTotal = quantity * 0.70;
       
           } else if (productName == "beer") {
               priceTotal = quantity * 1.10;
       
           } else if (productName == "sweets") {
               priceTotal = quantity * 1.35;
       
           } else if (productName == "peanuts") {
               priceTotal = quantity * 1.55;
       
           }
}

console.log ("Total price: " + priceTotal);

}

smallShop (["sweets", "Varna", 2]);