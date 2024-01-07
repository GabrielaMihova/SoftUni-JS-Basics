function demo(input) {
    num = Number(input[0])

    let lastDigit = num % 10;
    let left = (num - lastDigit) / 10;
    let secondDigit = left % 10;
    let firstDigit = (left - secondDigit) / 10;

    for (let i = 1; i <= lastDigit; i++) {
        for (let j = 1; j <= secondDigit; j++) {
            for (let k = 1; k <= firstDigit; k++) {
                let result = i * j * k;
                console.log(`${i} * ${j} * ${k} = ${result};`);
            }
        }
    }
}

demo(["324"]);