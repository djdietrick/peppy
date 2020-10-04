var Datastore = require('nedb')

export let playerStore = new Datastore({
    filename: 'playerStore',
    timestampData: true
});
export let gameStore = new Datastore({
    filename: 'gameStore',
    timestampData: true
});
export let statStore = new Datastore({
    filename: 'statStore',
    timestampData: true,
    autoload: true
});

export let userStore = new Datastore({
    filename: 'userStore',
    autoload: true
});