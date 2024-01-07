function cleverLily(input) {
    let lilysAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let savedMoney = 0;
    let stolenMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= lilysAge; currentAge++) {
        if (currentAge % 2 === 0) {
            savedMoney += addMoney;
            addMoney += 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }

    let totalMoney = singleToyPrice * toysCounter;
    let totalSavedMoney = totalMoney + savedMoney - stolenMoney;

    if (totalSavedMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingMachinePrice - totalSavedMoney).toFixed(2)}`)
    }
}

cleverLily (["21",

"1570.98",

"3"]);