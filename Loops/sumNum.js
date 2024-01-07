function sumNum (input) {
    let index = 1;
    let total = Number(input[0]);
    let sum = 0;

    while(sum<total) {
        let currentNum = Number(input[index]);
        sum += currentNum;
        index++;
    }
    console.log(sum);

}
sumNum (["100", "10", "20", "30", "40"]);