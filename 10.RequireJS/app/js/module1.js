(function () {
    (require(
        ['module2'],
        function (Module) {
            alert(Module.msg);
        })());

})();
