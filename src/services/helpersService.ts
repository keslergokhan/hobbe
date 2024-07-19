export class Helpers{
    private static instance : Helpers;

    private constructor() {
        
    }

    public static getInstance(): Helpers{
        if(!Helpers.instance){
            Helpers.instance = new Helpers();
        }

        return Helpers.instance;
    }

    /**
     * Rastgele bir sayı üret
     * @param min 
     * @param max 
     * @returns 
     */
    randomNumber(min:number,max:number):number{
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}