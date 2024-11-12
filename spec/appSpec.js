import { Main } from "../src/app.js";

describe("Berlinclock function should return the clock of a timestamp", function(){
    let main = new Main();

    let now = new Date(0);

    it("Berlinclock should return a string representing a clock with all lights turn off", function(){
        let result = main.berlinClock(now.getTime());

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n 0000 \n 0")
    });

    it("Berlinclock should return a string representing a clock with one light turn on after 1 min", function(){

        let result = main.berlinClock(now.getTime()+60000);

        expect(result).toBe("X000 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

    
    it("Berlinclock should return a string representing a clock with 2 lights turn on after 2 min", function(){

        let result = main.berlinClock(now.getTime()+(2*60000));

        expect(result).toBe("XX00 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

        
    it("Berlinclock should return a string representing a clock with 3 lights turn on after 3 min", function(){

        let result = main.berlinClock(now.getTime()+(3*60000));

        expect(result).toBe("XXX0 \n 00000000000 \n 0000 \n 0000 \n 0");
    });

});