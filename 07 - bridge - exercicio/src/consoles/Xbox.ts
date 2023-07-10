import IConsole from "./IConsole";

export default class Xbox implements IConsole{
    
    constructor(){
        console.log("Xbox: Configurando Console!");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("Xbox: Configurando a Jogatina!");
    }
    authToken(): void {
        console.log("Xbox: Autorizando o Console!");
    }
}