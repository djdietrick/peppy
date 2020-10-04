var Datastore = require('nedb');

let playerStore = new Datastore({
    filename: 'playerStore',
    timestampData: true
});

module.exports.doesPlayerExist = async function doesPlayerExist(tag) {
    let players = await playerStore.find({_id: tag});
    return players.length > 0;
}

module.exports.addPlayer = async function addPlayer(player) {
    await playerStore.insert({
        _id: player.tag,
        name: player.name
    });
}