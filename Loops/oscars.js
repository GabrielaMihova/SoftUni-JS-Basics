function oscars(input) {
    let nameActor = input[0]
    let academyPoints = Number(input[1])
    let juri = Number(input[2])


    let totalPoint = academyPoints;
    for (index = 3; index < input.length; index += 2) {
        let curentJuriName = input[index]

        let pointsGiven = Number(input[index + 1])

        let totalJuriPoints = (curentJuriName.length * pointsGiven) / 2;
        totalPoint += totalJuriPoints;
        if (totalPoint >= 1250.5) {
            break;
        }

    } if (totalPoint >= 1250.5) {
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${totalPoint.toFixed(1)}!`)

    } else {
        let neededPoint = 1250.5
        console.log(`Sorry, ${nameActor} you need ${(neededPoint - totalPoint).toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"]);