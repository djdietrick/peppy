var Datastore = require('nedb');

export let playerStore = new Datastore({
    filename: 'playerStore',
    timestampData: true
});

export async function doesPlayerExist(tag) {
    let players = await playerStore.find({_id: tag});
    return players.length > 0;
}

export async function addPlayer(player) {
    await playerStore.insert({
        _id: player.tag,
        name: player.name
    });
}