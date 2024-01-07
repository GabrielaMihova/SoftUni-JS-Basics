function sumPrimeNonPrime(input) {
    let index = 0;
    let data = input[index];
    let primeNumSum = 0;
    let nonPrimeNumSum = 0;
    let currentNum = 0;
 
 
    while (data !== 'stop') {
 
        if (data == Number(data)) {
            currentNum = Number(data);
        }
 
        if (currentNum < 0) {
            console.log('Number is negative.');
            index++;
            data = input[index];
            continue;
        }
 
        let isPrime = true;
 
        if (currentNum === 1) {
            isPrime = false;
 
        } else if (currentNum === 2) {
            isPrime = true;
        } else {
            for (let i = currentNum; i >= 2; i--) {
                if (currentNum % i === 0 && currentNum !== i) {
                    isPrime = false;
                    break;
                }
            }
        }
 
        if (isPrime) {
            primeNumSum += currentNum;
        } else {
            nonPrimeNumSum += currentNum;
        }
 
        index++;
        data = input[index];
    }
 
    console.log(`Sum of all prime numbers is: ${primeNumSum}`);
    console.log(`Sum of all non prime numbers is: ${nonPrimeNumSum}`);
}
sumPrimeNonPrime (["3",

"9",

"0",

"7",

"19",

"4",

"stop"]);