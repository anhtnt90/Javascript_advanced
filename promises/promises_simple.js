let promisesToCleanTheRoom = new Promise(function(resolve, reject) {
    let isClean = false;

    if(isClean) {
        resolve();
    } else {
        reject('not Clean');
    }
});

promisesToCleanTheRoom.then(function(fromResolve) {
  console.log('the room is' + fromResolve);
}).catch(function(fromReject){
	console.log('the room is' + fromReject);
})