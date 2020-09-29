import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const doesPlayerExist = (tag: string): Promise<boolean> => {
    return admin.firestore().collection('users').doc(tag).get()
        .then(player => { return player.exists; });
}

const createPlayer = async (player: any): Promise<void> => {
    await admin.firestore().collection('users').doc(player.tag).set({
        tag: player.tag,
        code: player.code
    });
}

export const processGame = functions.https.onCall((game, context) => {
    for(const player of game.players) {
        doesPlayerExist(player.tag).then(exists => {
            if(!exists) {
                createPlayer(player).then(() => {
                    console.log("Created new player", player.tag);
                }).catch(err => {
                    console.error("Error creating player:", err);
                })
            }
        }).catch(err => {console.error(err);})
    }
});