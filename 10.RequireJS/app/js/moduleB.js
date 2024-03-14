define(['moduleA'],
    function (mod) {
        console.log('From B');

        return {
            msg : 'Hello world from module B'
        };
    });
