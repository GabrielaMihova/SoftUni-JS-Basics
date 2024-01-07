function fruitShop (input) {
    let fruitType = input[0];
    let weekDay = input[1];
    let quantity = Number(input[2]);

    price = 0;

    switch (weekDay) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            if (fruitType === "banana") {
                price = 2.5;
            } else if ( fruitType === "apple") {
                price = 1.2;
            } else if (fruitType === "orange"){
                price = 0.85;
            } else if (fruitType === "grapefruit") {
                price = 1.45;
            } else if (fruitType === "kiwi") {
                price = 2.7;
            } else if (fruitType === "pineapple") {
                price = 5.5;
            } else if (fruitType === "grapes") {
                price = 3.85;
            } else {
                console.log ("error") 
                break;
            }
            console.log ((price*quantity).toFixed(2));
            break;
            case 'Saturday':
            case 'Sunday':
                if (fruitType === "banana") {
                    price = 2.7;
                } else if ( fruitType === "apple") {
                    price = 1.25;
                } else if (fruitType === "orange"){
                    price = 0.9;
                } else if (fruitType === "grapefruit") {
                    price = 1.6;
                } else if (fruitType === "kiwi") {
                    price = 3;
                } else if (fruitType === "pineapple") {
                    price = 5.6;
                } else if (fruitType === "grapes") {
                    price = 4.2;
                } else {
                    console.log ("error") 
                    break;
                }
                console.log ((price*quantity).toFixed(2));
            break;
            default:
                console.log('error');
                break;
    }
    


}

fruitShop (["apple",

"Tuesday",

"2"]);