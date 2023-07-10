import IConsole from "../consoles/IConsole";
import IGameplay from "./IGameplay";

export default class Live implements IGameplay{

    constructor(private consoles: IConsole){}

    playing(): void {
        console.log("Iniciando a Jogatina!");
    }
    result(): void {
        console.log("***************** EA Sports Tcheneguein ******************");
    }

}