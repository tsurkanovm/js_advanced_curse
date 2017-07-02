(function (window) {
    window.addEventListener("load", function () {
        var link = document.getElementsByTagName("a")[0];
        link.innerText = "Content";

        link.onclick = function (e) {
            e.preventDefault();
            link.innerText = "Content Open!!!";
            var newWindow = window.open('ex0_content.html','The new window');
            newWindow.onunload = function () {
                link.innerText = "Content";
            }
        }
    });
})(window);
