(function () {
    'use strict';

    window.VarDumper = {};
    VarDumper.dump = function (args) {
        args.map(
            function (value) {
                document.write(value);
                document.write("</br>");
            }
        );
    }
})();