function grandpaStavri(input) {
  let days = Number(input[0]);
  let counter = 1
  let rakiqTotal = 0
  let degreesBefore = 0

  for (i = 0; i < days; i++) {
      let rakiq = Number(input[counter]);
      let gradus = Number(input[counter + 1])
      counter += 2
      rakiqTotal += rakiq
      degreesBefore += gradus * rakiq
  }

  let degreesAfter = degreesBefore / rakiqTotal;

  console.log(`Liter: ${rakiqTotal.toFixed(2)}`);
  console.log(`Degrees: ${degreesAfter.toFixed(2)}`);

  if (degreesAfter < 38) {
      console.log("Not good, you should baking!");
  }
  else if (degreesAfter >= 38 && degreesAfter <= 42) {
      console.log("Super!");
  }
  else if (degreesAfter > 42) {
      console.log("Dilution with distilled water!");
  }
}

grandpaStavri(["3",
  "100",
  "45",
  "50",
  "55",
  "150",
  "36"
])