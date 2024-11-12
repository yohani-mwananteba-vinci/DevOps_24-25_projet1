import { Main } from "../src/app.js";

describe("Berlinclock function should return the clock of a timestamp", function(){

    it("Berlinclock should return a string representing a clock with all lights turn off", function(){
        let main = new Main();

        let now = new Date();

        let result = main.berlinClock(now.getSeconds);

        expect(result).toBe("0000 \n 00000000000 \n 0000 \n 0000 \n 0")
    });
});