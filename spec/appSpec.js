import { Main } from "../src/app.js";

describe("Berlinclock function should return the clock of a timestamp", function(){
    let main = new Main();

    let now = new Date();



    it("Berlinclock should return a string representing a clock with all lights turn off", function(){
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n 0000 \n 0")
    });

    it("Berlinclock should return a string representing a clock with one light turn on after 1 min", function(){
        now.setHours(0);
        now.setMinutes(1);
        now.setSeconds(0);
        now.setMilliseconds(0);
        
        let result = main.berlinClock(now);

        expect(result).toBe("X000 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

    
    it("Berlinclock should return a string representing a clock with 2 lights turn on after 2 min", function(){
        now.setHours(0);
        now.setMinutes(2);
        now.setSeconds(0);
        now.setMilliseconds(0);        
        
        let result = main.berlinClock(now);

        expect(result).toBe("XX00 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

        
    it("Berlinclock should return a string representing a clock with 3 lights turn on after 3 min", function(){
        now.setHours(0);
        now.setMinutes(3);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("XXX0 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

    
    it("Berlinclock should return a string representing a clock with 4 lights turn on after 4 min", function(){
        now.setHours(0);
        now.setMinutes(4);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("XXXX \n 00000000000 \n 0000 \n 0000 \n 0");
    });


    it("Berlinclock should return a string representing a clock with 1 light turn on the second row after 5 min", function(){
        now.setHours(0);
        now.setMinutes(5);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n X0000000000 \n 0000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 1 ligth on first row after 6 min", function(){
        now.setHours(0);
        now.setMinutes(6);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("X000 \n X0000000000 \n 0000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 2 ligths on first row after 7 min", function(){
        now.setHours(0);
        now.setMinutes(7);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("XX00 \n X0000000000 \n 0000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 3 ligths on first row after 8 min", function(){
        now.setHours(0);
        now.setMinutes(8);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("XXX0 \n X0000000000 \n 0000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 1 light turn on the second row and 4 ligths on first row after 9 min", function(){
        now.setHours(0);
        now.setMinutes(9);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("XXXX \n X0000000000 \n 0000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 2 light turn on the second row and 0 ligths on first row after 10 min", function(){
        now.setHours(0);
        now.setMinutes(10);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n XX000000000 \n 0000 \n 0000 \n 0");
    });


    it("Berlinclock should return a string representing a clock with 0 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 0 hours", function(){
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 1 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 1 hours", function(){
        now.setHours(1);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n X000 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 2 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 2 hours", function(){
        now.setHours(2);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n XX00 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 3 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 3 hours", function(){
        now.setHours(3);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n XXX0 \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 4 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 4 hours", function(){
        now.setHours(4);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n XXXX \n 0000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 1 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 5 hours", function(){
        now.setHours(5);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n X000 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 2 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 10 hours", function(){
        now.setHours(10);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n XX00 \n 0");
    });

    it("Berlinclock should return a string representing a clock with 3 light turn on on forth row 0 light turn on the third row 0 light turn on the second row and 0 ligths on first row after 15 hours", function(){
        now.setHours(15);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        let result = main.berlinClock(now);

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n XXX0 \n 0");
    });

});