let cleanRoom = function() {
    return new Promise(function(resolve, reject) {
        resolve('Cleaned The Room');
    });
};

let removeGarbage = function(message) {
    return new Promise(function(resolve, reject) {
        reject(message + ' remove Garbage');
    });
};

let winIceCream = function(message) {
    return new Promise(function(resolve, reject) {
        resolve(message + ' won IceCream');
    });
};

/*cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIceCream(result);
}).then(function(result) {
    console.log('finished ' + result);
}).catch(function(result) {
    console.log('error ' + result);
});*/

//another way
Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function() {
    console.log('all finished');    
}).catch(function() {
    console.log('error');
});

//one of them is finished
Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function() {
    console.log('one of them is finished');    
}).catch(function() {
    console.log('error');
});