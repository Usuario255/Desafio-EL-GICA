export class backend{

    private static servidor: string = "http://localhost:8080/"

    public static  baseEntidades():string{

        return this.servidor + "entidades"
    }
}