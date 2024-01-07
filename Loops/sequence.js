function sequence (input) {
    let n = Number(input[0]);
    let current = 1;
    while (current <= n) {
        console.log (current);
        current = (current*2)+1;
    }
}
sequence (["3"]);