define(
    function () {
        console.log('From A');
        let someFunc = function () {
            console.log('Here we go!');
        }

        setTimeout(someFunc, 0); //will invoke after all modules.
        // This is used to defer the execution of a function until the stack is clear.
        // ._defer - the same
        return {
            msg : 'Hello world from module A'
        };
    });
