function sumNumbers (input) {
    let word = input[0];
let totalValue =0;

    for (let i=0; i <word.length; i++) {
        let currentDigit = Number(word.charAt(i));
        totalValue += currentDigit;

    }
    console.log (`The sum of the digits is:${totalValue}`);

}
sumNumbers (['1234'])