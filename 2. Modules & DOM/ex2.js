(function () {

    window.onload = function() {
        document.getElementById("btnAdd").onclick = addNew;
        var content = document.getElementById("content");

        function isToMatchElements() {
            return content.childElementCount >= 10

        };

        function addNew() {
            var newElement = document.createElement("p");
            newElement.innerText = "Test";

            if (isToMatchElements()) {
                content.innerHTML = '';
            }

            content.appendChild(newElement);
        }
    };
})();
