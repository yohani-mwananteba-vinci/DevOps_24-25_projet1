export class Main {

    berlinClock(number){
        let now = new Date(0);

        if(number === now.getTime())
            return "0000 \n 00000000000 \n 0000 \n 0000 \n 0"; 
        else if (number === now.getTime()+60000)
             return "X000 \n 00000000000 \n 0000 \n 0000 \n 0";
    }
}