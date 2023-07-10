import IConsole from "./consoles/IConsole";
import Play from "./gameplays/Play";
import AdvancedPlay from "./gameplays/AdvancedPlay";
import Xbox from "./consoles/Xbox";
import PlayStation from "./consoles/PlayStation";

function startPlay(consoles : IConsole){
    console.log("Aguarde...");
    const play = new Play(consoles);
    play.playing();
    play.result();
}

function startAdvancedPlay(consoles : IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(consoles);
    play.playing();
    play.result();
    play.challenge();
}

startAdvancedPlay(new Xbox());
startAdvancedPlay(new PlayStation());