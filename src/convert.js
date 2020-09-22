const { SlippiGame, characters, stages} = require('@slippi/slippi-js');
let path = require('path');

function convertFile(filename) {
    const g = new SlippiGame(path.join(filename));

    const settings = g.getSettings();
    const metadata = g.getMetadata();
    const stats = g.getStats();
    //console.log(stats.stocks);

    let game = {};
    game.filename = filename;

    game.stage = {
        id: settings.stageId,
        name: stages.getStageName(settings.stageId)
    };

    game.players = [];
    for(let player of settings.players) {
        game.players.push({
            index: player.playerIndex,
            tag: metadata.players[player.playerIndex].names.netplay,
            code: metadata.players[player.playerIndex].names.code,
            port: player.port,
            character: {
                id: player.characterId,
                name: characters.getCharacterName(player.characterId),
                colorId: player.characterColor,
                colorName: characters.getCharacterColorName(player.characterId, player.characterColor)
            },
            remainingStocks: 4,
            controllerFix: player.controllerFix,
        })
    }

    for(let stock of stats.stocks) {
        if(stock.deathAnimation !== null) {
            game.players[stock.playerIndex].remainingStocks -= 1;
        }     
    }

    // TODO, need to handle quit/sudden death scenario
    game.winner = game.players.find((player) => {
        return player.remainingStocks !== 0
    });
    game.winner = game.winner.index;

    return game;
}

module.exports = convertFile;
