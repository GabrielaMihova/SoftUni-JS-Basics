function dividedByNine (input) {
    let start = Number(input[0]);
    let end = Number(input[1]);

    let sum = 0;
    let numbers=" ";
    for (let i=start; i <=end; i++) {
        if(i % 9 == 0) {
            sum +=i;
            numbers += (i +'\n');

        }
    }
    console.log (`The sum: ${sum}`);
    console.log (numbers.trim());
}
dividedByNine ([100, 200]);