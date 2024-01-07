function trekkingMania(input) {
    let groupNumbers = Number(input[0]);
 
    let Musala = 0;
    let Monbland = 0;
    let Kilimanjaro = 0;
    let K2 = 0;
    let Everest = 0;
    let total = 0;
 
    for (i = 1; i <= groupNumbers; i++){
        let participants = Number(input[i]);
        total += participants;
 
        if (participants <= 5) {
            Musala += participants;
        }
        else if (participants >= 6 && participants <= 12) {
            Monbland += participants;
        }
        else if (participants >= 13 && participants <= 25) {
            Kilimanjaro += participants;
        }
        else if (participants >= 26 && participants <= 40) {
            K2 += participants;
        }
        else if (participants >= 41) {
            Everest += participants;
        }
    
    }
   Musala = (Musala / total) * 100;
   Monbland = (Monbland / total) * 100;
   Kilimanjaro = (Kilimanjaro / total) * 100;
   K2 = (K2 / total) * 100;
   Everest = (Everest / total) * 100;
 
   console.log(`${(Musala).toFixed(2)}%`);
   console.log(`${(Monbland).toFixed(2)}%`);
   console.log(`${(Kilimanjaro).toFixed(2)}%`);
   console.log(`${(K2).toFixed(2)}%`);
   console.log(`${(Everest).toFixed(2)}%`);
 
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);