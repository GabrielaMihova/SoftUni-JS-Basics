function vowelsSum (input) {
    let word = input[0];
    totalValue =0;

    for (let i=0; i < word.length; i++) {
        let currentCharacter = word.charAt(i);
        switch (currentCharacter) {
            case 'a': totalValue +=1; break;
            case 'e': totalValue +=2; break;
            case 'i': totalValue +=3; break;
            case 'o': totalValue +=4; break;
            case 'u': totalValue +=5; break;
            default: break;
        }
        
    }
    console.log (totalValue);
}
vowelsSum (["hello"]);