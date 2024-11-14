export class Main {
    
    startBerlinClock(timestamp) {
        let berlinClock = {
          FifthRow: this.updateFifthRow(timestamp),
          FourthRow: this.updateFourthRow(timestamp),
          ThirdRow: this.updateThirdRow(timestamp),
          SecondRow: this.updateSecondRow(timestamp),
          FisrtRow: this.updateFirstRow(timestamp),
        };
        console.log(timestamp.getHours() +":"+timestamp.getMinutes()+":"+timestamp.getSeconds());
        return berlinClock;
      }

  updateFirstRow(timestamp) {
    let lightOn = timestamp.getMinutes() % 5;
    return "X".repeat(lightOn).padEnd(4, "0");
  }
  updateSecondRow(timestamp) {
    let secondRow = "";
    let lightOn = Math.floor(timestamp.getMinutes() / 5);
    for (let i = 1; i <= 11; i++) {
      if (i <= lightOn) {
        if (i % 3 == 0) secondRow += "Y";
        else secondRow += "X";
      } else {
        secondRow += "0";
      }
    }
    return secondRow;
  }

  updateThirdRow(timestamp) {
    let singleHours = timestamp.getHours() % 5;
    return "X".repeat(singleHours).padEnd(4, "0");
  }

  updateFourthRow(timestamp) {
    let fiveHourBlocks = Math.floor(timestamp.getHours() / 5);
    return "X".repeat(fiveHourBlocks).padEnd(4, "0");
  }

  updateFifthRow(timestamp) {
    let seconde = timestamp.getSeconds();
    if (seconde % 2 == 0) return "X";
    else return "0";
  }
}

let main = new Main();
let today = new Date();
main.startBerlinClock(today);
