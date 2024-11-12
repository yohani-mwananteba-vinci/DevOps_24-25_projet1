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
        now.setMilliseconds(0);        let result = main.berlinClock(now);

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


});