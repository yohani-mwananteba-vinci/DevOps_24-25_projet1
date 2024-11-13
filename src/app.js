export class Main {
  updateFisrtRow(timestamp) {
    let now = new Date();
    let result = "";

    const lamp_allume = timestamp.getMinutes() % 5;
    return "X".repeat(lamp_allume).padEnd(4, 0);
  }
  updateSecondRow(timestamp) {
    let now = new Date();
    let result = "";
    const lampeAllume = Math.floor(timestamp.getMinutes() / 5);
    for (let i = 1; i < 11; i++) {
      if (i < lampeAllume) {
        if (i % 3 == 0) result += "Y";
        else result += "X";
      } else {
        result += "0";
      }
    }

    return result;
  }
  updateThirdRow(timestamp) {
    let now = new Date();
    let result = "";
    const singleHours = timestamp.getHours() % 5;

    if (singleHours === 0) {
      result += " 0000 \n";
    }

    if (singleHours === 1) {
      result += " X000 \n";
    }

    if (singleHours === 2) {
      result += " XX00 \n";
    }

    if (singleHours === 3) {
      result += " XXX0 \n";
    }

    if (singleHours === 4) {
      result += " XXXX \n";
    }
    return result;
  }
  updateFourthRow(timestamp) {
    let now = new Date();
    let result = "";
    const fiveHourBlocks = Math.floor(timestamp.getHours() / 5);

    if (fiveHourBlocks === 0) {
      result += " 0000 \n";
    }

    if (fiveHourBlocks === 1) {
      result += " X000 \n";
    }

    if (fiveHourBlocks === 2) {
      result += " XX00 \n";
    }

    if (fiveHourBlocks === 3) {
      result += " XXX0 \n";
    }

    if (fiveHourBlocks === 4) {
      result += " XXXX \n";
    }

    result += " 0";

    return result;
  }

  testFunction() {
    let today = new Date();
    return {
      FirstRow: this.updateFisrtRow(today),
      SecondRow: this.updateSecondRow(today),
      ThirdRow: this.updateThirdRow(today),
    };
  }
}

let main = new Main();
console.log(main.testFunction());
