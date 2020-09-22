const chokidar = require('chokidar');
const path = require('path');
const fs = require('fs');
const convertFile = require('./convert.js');
const {doesPlayerExist, addPlayer} = require('./db/players.js');

const gamesPath = path.join(__dirname, "../test/files/");
const testGame = "C:/GitHub/peppy/test/files/Game_20200909T201636.slp";

//let watcher = chokidar.watch(gamesPath + "*.slp");
let watcher = chokidar.watch(testGame);

watcher.on('add', (filepath) => {
    const filename = filepath.replace(/^.*[\\\/]/, '')
    const directory = path.dirname(filepath);

    const game = convertFile(filepath);
    console.log(game.players[0].character);

    if (!fs.existsSync(path.join(directory, 'processed'))){
        fs.mkdirSync(path.join(directory, 'processed'));
    }

    // fs.rename(filepath, path.join(directory, 'processed', filename), (err) => {
    //     if(err) throw err;
    //     console.log("Moved file");
    // })
})