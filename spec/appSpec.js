import { Main } from "../src/app.js";
let main = new Main();
let now = new Date();

describe("Test for the first row of the BerlinClock", function () {
  it("Berlinclock should return a string representing a clock with all lights turn off", function () {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFirstRow(now);
    expect(result).toBe("0000");
  });

  it("Berlinclock should return a string representing a clock with one light turn on after 1 min", function () {
    now.setHours(0);
    now.setMinutes(1);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let result = main.updateFirstRow(now);

    expect(result).toBe("X000");
  });

  it("Berlinclock should return a string representing a clock with 2 lights turn on after 2 min", function () {
    now.setHours(0);
    now.setMinutes(2);
    now.setSeconds(0);
    now.setMilliseconds(0);

    let result = main.updateFirstRow(now);

    expect(result).toBe("XX00");
  });

  it("Berlinclock should return a string representing a clock with 3 lights turn on after 3 min", function () {
    now.setHours(0);
    now.setMinutes(3);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFirstRow(now);

    expect(result).toBe("XXX0");
  });

  it("Berlinclock should return a string representing a clock with 4 lights turn on after 4 min", function () {
    now.setHours(0);
    now.setMinutes(4);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFirstRow(now);

    expect(result).toBe("XXXX");
  });
});

  //Second row from BerlinClock
describe("Test for the second row of the BerlinClock", function () {
  it("Berlinclock should return a string representing a clock with 1 light turn on the second row after 5 min", function () {
    now.setHours(0);
    now.setMinutes(5);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateSecondRow(now);

    expect(result).toBe("X0000000000");
  });

  it("Berlinclock should return a string representing a clock with 1 light turn on the second row 1 light on first row after 6 min", function () {
    now.setHours(0);
    now.setMinutes(11);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateSecondRow(now);

    expect(result).toBe("XX000000000");
  });

  it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 2 lights on first row after 7 min", function () {
    now.setHours(0);
    now.setMinutes(25);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateSecondRow(now);

    expect(result).toBe("XXYXX000000");
  });

  it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 3 lights on first row after 8 min", function () {
    now.setHours(0);
    now.setMinutes(35);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateSecondRow(now);

    expect(result).toBe("XXYXXYX0000");
  });

  it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 4 lights on first row after 9 min", function () {
    now.setHours(0);
    now.setMinutes(45);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateSecondRow(now);

    expect(result).toBe("XXYXXYXXY00");
  });

  it("Berlinclock should return a string representing a clock with 2 light turn on the second row and 0 lights on first row after 10 min", function () {
    now.setHours(0);
    now.setMinutes(55);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateSecondRow(now);

    expect(result).toBe("XXYXXYXXYXX");
  });
});
//Third Row
describe("Test for the third row of the BerlinClock", function () {
  it("Berlinclock should return a string representing a clock with 0 light turn on the third row 0 light turn on the second row and 0 lights on first row after 0 hours", function () {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateThirdRow(now);

    expect(result).toBe("0000");
  });

  it("Berlinclock should return a string representing a clock with 1 light turn on the third row 0 light turn on the second row and 0 lights on first row after 1 hours", function () {
    now.setHours(1);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateThirdRow(now);

    expect(result).toBe("X000");
  });

  it("Berlinclock should return a string representing a clock with 2 light turn on the third row 0 light turn on the second row and 0 lights on first row after 2 hours", function () {
    now.setHours(2);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateThirdRow(now);

    expect(result).toBe("XX00");
  });

  it("Berlinclock should return a string representing a clock with 3 light turn on the third row 0 light turn on the second row and 0 lights on first row after 3 hours", function () {
    now.setHours(3);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateThirdRow(now);

    expect(result).toBe("XXX0");
  });

  it("Berlinclock should return a string representing a clock with 4 light turn on the third row 0 light turn on the second row and 0 lights on first row after 4 hours", function () {
    now.setHours(4);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateThirdRow(now);

    expect(result).toBe("XXXX");
  });
});
//Fourth row
describe("Test for the fourth row of the BerlinClock", function () {
  it("Berlinclock should return a string representing a clock with 1 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 lights on first row after 5 hours", function () {
    now.setHours(5);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFourthRow(now);

    expect(result).toBe("X000");
  });

  it("Berlinclock should return a string representing a clock with 2 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 lights on first row after 10 hours", function () {
    now.setHours(10);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFourthRow(now);

    expect(result).toBe("XX00");
  });

  it("Berlinclock should return a string representing a clock with 3 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 lights on first row after 15 hours", function () {
    now.setHours(15);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFourthRow(now);

    expect(result).toBe("XXX0");
  });

  it("Berlinclock should return a string representing a clock with 4 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 lights on first row after 20 hours", function () {
    now.setHours(20);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    let result = main.updateFourthRow(now);

    expect(result).toBe("XXXX");
  });
});
//Test for the Fifth Row
describe("Test for the fifth row", function () {
  it("Return 0 on the last row", function () {
    now.setSeconds(1);
    let result = main.updateFifthRow(now);
    expect(result).toBe("0");
  });
  it("Return X on the last row", function () {
    now.setSeconds(2);
    let result = main.updateFifthRow(now);
    expect(result).toBe("X");
  });
  it("Return 0 on the last row", function () {
    now.setSeconds(3);
    let result = main.updateFifthRow(now);
    expect(result).toBe("0");
  });
  it("Return X on the last row", function () {
    now.setSeconds(4);
    let result = main.updateFifthRow(now);
    expect(result).toBe("X");
  });
});

//Test all Row
describe("Test for all Rows", function () {
  it("Return an Object for the good berlinClock with the following time 15:14:45", function () {
    let nDate = new Date();
    nDate.setHours(15);
    nDate.setMinutes(14);
    nDate.setSeconds(45);

    let nBerlinClock = {
      FifthRow: '0',
      FourthRow: 'XXX0',
      ThirdRow: '0000',
      SecondRow: 'XX000000000',
      FisrtRow: 'XXXX',
    };

    let result = main.startBerlinClock(nDate);

    expect(result).toEqual(nBerlinClock);
  });
});
