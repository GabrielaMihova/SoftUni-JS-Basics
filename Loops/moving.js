function moving(input) {
    let index = 0;
    let sideA = Number(input[index]);
    index++;
    let sideB = Number(input[index]);
    index++;
    let sideC = Number(input[index]);
    index++;
    let roomSize = sideA * sideB * sideC;
   
    let command = input[index];
    index++;
   
    while (command !== "Done") {
      package = Number(command);
      roomSize -= package;
   
      if (roomSize <= 0) {
        console.log(
          `No more free space! You need ${Math.abs(roomSize)} Cubic meters more.`
        );
        break;
      }
   
      command = input[index];
      index++;
    }
   
    if (roomSize >= 0) {
      console.log(`${roomSize} Cubic meters left.`);
    }
  }
  moving (["10",

  "1",
  
  "2",
  
  "4",
  
  "6",
  
  "Done"])