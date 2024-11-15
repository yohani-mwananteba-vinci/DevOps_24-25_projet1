export class Main {
    
    startBerlinClock(timestamp) {
        let berlinClock = {
          FifthRow: this.updateFifthRow(timestamp),
          FourthRow: this.updateFourthRow(timestamp),
          ThirdRow: this.updateThirdRow(timestamp),
          SecondRow: this.updateSecondRow(timestamp),
          FisrtRow: this.updateFirstRow(timestamp),
        };
        console.log("\nCurrent time: "+ timestamp.getHours() +":"+timestamp.getMinutes()+":"+timestamp.getSeconds());
        for (let row in berlinClock) {
            console.log(`${berlinClock[row]}`);
          };
        return berlinClock;
      }

  updateFirstRow(timestamp) {
    let lightOn = timestamp.getMinutes() % 5;
    return "Y".repeat(lightOn).padEnd(4, "0");
  }
  updateSecondRow(timestamp) {
    let secondRow = "";
    let lightOn = Math.floor(timestamp.getMinutes() / 5);
    for (let i = 1; i <= 11; i++) {
      if (i <= lightOn) {
        if (i % 3 == 0) secondRow += "R";
        else secondRow += "Y";
      } else {
        secondRow += "0";
      }
    }
    return secondRow;
  }

  updateThirdRow(timestamp) {
    let singleHours = timestamp.getHours() % 5;
    return "R".repeat(singleHours).padEnd(4, "0");
  }

  updateFourthRow(timestamp) {
    let fiveHourBlocks = Math.floor(timestamp.getHours() / 5);
    return "R".repeat(fiveHourBlocks).padEnd(4, "0");
  }

  updateFifthRow(timestamp) {
    let seconde = timestamp.getSeconds();
    if (seconde % 2 == 0) return "R";
    else return "0";
  }
}

let main = new Main();
let today = new Date();
main.startBerlinClock(today);
