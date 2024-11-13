export class Main {

    berlinClock(timestamp){
        let now = new Date();
        let result = "";

        const singleMinutes = timestamp.getMinutes() % 5;
        if(singleMinutes === 0){
            result +="0000 \n"
        }

        if (singleMinutes === 1){
            result +="X000 \n"
        }
            
        if (singleMinutes === 2){
            result +="XX00 \n"
        }

        if (singleMinutes === 3){
            result +="XXX0 \n"
        }

        if (singleMinutes === 4){
            result +="XXXX \n"
        }

        const fiveMinuteBlocks = Math.floor(timestamp.getMinutes() / 5);

        if(fiveMinuteBlocks === 0){
            result +=" 00000000000 \n"
        }

        if (fiveMinuteBlocks === 1){
            result +=" X0000000000 \n"
        }

        if (fiveMinuteBlocks === 2){
            result +=" XX000000000 \n"
        }

        if (fiveMinuteBlocks === 3){
            result +=" XXX00000000 \n"
        }

        if (fiveMinuteBlocks === 4){
            result +=" XXXX0000000 \n"
        }

        if (fiveMinuteBlocks === 5){
            result +=" XXXXX000000 \n"
        }

        if (fiveMinuteBlocks === 6){
            result +=" XXXXXX00000 \n"
        }

        if (fiveMinuteBlocks === 7){
            result +=" XXXXXXX0000 \n"
        }

        if (fiveMinuteBlocks === 8){
            result +=" XXXXXXXX000 \n"
        }

        if (fiveMinuteBlocks === 9){
            result +=" XXXXXXXXX00 \n"
        }

        if (fiveMinuteBlocks === 10){
            result +=" XXXXXXXXXX0 \n"
        }

        if (fiveMinuteBlocks === 11){
            result +=" XXXXXXXXXXX \n"
        }

        const singleHours = timestamp.getHours() % 5;

        if (singleHours === 0){
            result += " 0000 \n"
        }

        if (singleHours === 1){
            result += " X000 \n"
        }

        if (singleHours === 2){
            result += " XX00 \n"
        }

        if (singleHours === 3){
            result += " XXX0 \n"
        }

        if (singleHours === 4){
            result += " XXXX \n"
        }

        result+=" 0000 \n 0"

            return result; 
    
    }

}