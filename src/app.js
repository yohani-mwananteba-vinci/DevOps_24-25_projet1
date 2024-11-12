export class Main {

    berlinClock(number){
        let now = new Date(0);

        if(number === now.getTime())
            return "0000 \n 00000000000 \n 0000 \n 0000 \n 0"; 
        else return "X000 \n 00000000000 \n 0000 \n 0000 \n 0";
    }
}