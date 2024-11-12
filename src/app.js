export class Main {

    berlinClock(timestamp){
        let now = new Date();
        if (timestamp.getMinutes() === 1)
             return "X000 \n 00000000000 \n 0000 \n 0000 \n 0";

        if (timestamp.getMinutes() === 2)
            return "XX00 \n 00000000000 \n 0000 \n 0000 \n 0";

        if (timestamp.getMinutes() === 3)
            return "XXX0 \n 00000000000 \n 0000 \n 0000 \n 0";

        if (timestamp.getMinutes() === 4)
            return "XXXX \n 00000000000 \n 0000 \n 0000 \n 0";

        if (timestamp.getMinutes() ===5)
            return "0000 \n X0000000000 \n 0000 \n 0000 \n 0"

        if (timestamp.getMinutes() ===6)
            return "X000 \n X0000000000 \n 0000 \n 0000 \n 0"

        if (timestamp.getMinutes() ===7)
            return "XX00 \n X0000000000 \n 0000 \n 0000 \n 0"

        if (timestamp.getMinutes() ===8)
            return "XXX0 \n X0000000000 \n 0000 \n 0000 \n 0"

            return "0000 \n 00000000000 \n 0000 \n 0000 \n 0"; 
    
    }

}