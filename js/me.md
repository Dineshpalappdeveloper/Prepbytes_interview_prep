##hello

p1 = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 'heelo');
});
p2 = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 'bolo');
});
p3 = new Promise(function(resolve, reject) {
setTimeout(resolve, 100, 'eee');
});

    Promise.all([p1, p2, p3]).then(function(values) {
        document.write(values);
    });
