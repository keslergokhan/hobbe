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


export class LocalStorageHelpers{
    private static instance : LocalStorageHelpers;

    private constructor() {
        
    }

    public static getInstance(): LocalStorageHelpers{
        if(!LocalStorageHelpers.instance){
            LocalStorageHelpers.instance = new LocalStorageHelpers();
        }

        return LocalStorageHelpers.instance;
    }

    set<T>(key:string,a:T)
    {
        localStorage.setItem(key,JSON.stringify(a));
    }

    get<T>(key:string){
        const storageResult = localStorage.getItem(key);
        
        if(!storageResult){
            return JSON.parse(storageResult as string) as T;
        }else{
            return null;
        }
       
    }

    remove(key:string){
        localStorage.removeItem(key);
    }

}