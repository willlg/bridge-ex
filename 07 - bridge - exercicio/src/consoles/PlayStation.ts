import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    
    constructor(){
        console.log("PlayStation: Configurando Console!");
        this.configureGame();
    }
    configureGame(): void {
        this.authToken();
        console.log("PlayStation: Configurando a Jogatina!");
    }
    authToken(): void {
        console.log("PlayStation: Autorizando o Console!");
    }
}