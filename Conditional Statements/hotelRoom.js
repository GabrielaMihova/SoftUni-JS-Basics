function hotelRoom (input) {
    let month = input[0];
    let nights = input[1];

    let studio = 0;
    let apartment = 0;

    switch (month) {
        case month = 'May':
        case month = 'October':
            studio = 50*nights;
            apartment = 65*nights;
            if (15>nights && nights> 7) {
                studio = studio*0.95;
            }else if (nights > 14) {
                studio = studio*0.70;
            } else if (nights < 7) {
                    studio = studio;
            }
            break;
            case month = 'June':
            case month = 'September':
                studio=75.20*nights;
                apartment = 68.70*nights;
                if (nights > 14) {
                    studio = studio*0.80;
                } else {
                    studio = studio;
                }
                break;
                case month = 'July':
                case month = 'August':
                    studio = 76*nights;
                    apartment = 77 * nights;
                    break;
    } 
     if (nights > 14) {
        apartment = apartment*0.90;
     }

     console.log (`Apartment: ${apartment.toFixed(2)} lv.`);
     console.log (`Studio: ${studio.toFixed(2)} lv.`)

}


hotelRoom (["May",

"15"]);