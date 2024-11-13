export class Main {
  updateFisrtRow(timestamp) {
    let now = new Date();
    let result = "";

    const lamp_allume = timestamp.getMinutes() % 5;
    return "X".repeat(lamp_allume).padEnd(4, "0");
  }
  updateSecondRow(timestamp) {
    let now = new Date();
    let result = "";
    const lampeAllume = Math.floor(timestamp.getMinutes() / 5);
    for (let i = 1; i <= 11; i++) {
      if (i <= lampeAllume) {
        if (i % 3 == 0) result += "Y";
        else result += "X";
      } else {
        result += "0";
      }
    }
    return result;
  }

  updateThirdRow(timestamp) {
    const singleHours = timestamp.getHours() % 5;
    return "X".repeat(singleHours).padEnd(4, "0");
  }

  updateFourthRow(timestamp) {
    const fiveHourBlocks = Math.floor(timestamp.getHours() / 5);
    return "X".repeat(fiveHourBlocks).padEnd(4, "0");
  }

  updateFifthRow(timestamp) {
    const seconde = timestamp.getSeconds();
    if (seconde % 2 == 0) return "X";
    else return "0";
  }

  testFunction() {
    let today = new Date();
    return {
      FifthRow: this.updateFifthRow(today),
      FourthRow: this.updateFourthRow(today),
      ThirdRow: this.updateThirdRow(today),
      SecondRow: this.updateSecondRow(today),
      FisrtRow: this.updateFisrtRow(today),
    };
  }
}

let main = new Main();
console.log(main.testFunction());
