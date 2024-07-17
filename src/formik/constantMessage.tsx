export class FormConstantMesage{
    /**
     * Lütfen boş geçmeyiniz !
     * @returns 
     */
    static required = ():string => "Lütfen boş geçmeyiniz !";
    /**
     * En az ${x} karakter olabilir !
     * @param x 
     * @returns 
     */
    static min = (x:number):string => `En az ${x} karakter olabilir !`;
    /**
     * En fazla ${x} karakter olabilir !
     * @param x 
     * @returns 
     */
    static max = (x:number):string => `En fazla ${x} karakter olabilir !`;
    /**
     * Şifre uyuşmuyor !
     * @returns 
     */
    static passwordError=():string=>"Şifre uyuşmuyor !";
    /**
     * Lütfen geçerli bir e-posta adresi giriniz !
     * @returns 
     */
    static email=():string=>"Lütfen geçerli bir e-posta adresi giriniz !";
}

