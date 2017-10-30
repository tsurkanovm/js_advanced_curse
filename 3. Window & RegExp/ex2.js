(function (window) {
    var path = window.location.pathname;
    console.log(path);
    var customPath = '?a=689&b=45';
    var urlAccumulator = function (path) {
        var arr = path.match(/\d+/g);
        var total = 0;
        arr.forEach(function (value) {
            total += Number(value);
        });

        return total;
    };

    var result = document.getElementById("result");
    result.innerText = urlAccumulator(customPath);
    result.style.fontWeight = 'bold';
})(window);
