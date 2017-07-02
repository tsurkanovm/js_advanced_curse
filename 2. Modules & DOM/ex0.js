(function (document) {
    document.body.onload = function () {
        var divBtn = document.getElementById("btn_div");
        var linksBtn = document.getElementById("btn_links");
        var pBtn = document.getElementById("btn_p");

        divBtn.onclick = clickHandler;
        linksBtn.onclick = clickHandler;
        pBtn.onclick = clickHandler;

        function clickHandler () {
            switch (this.id) {
                case "btn_div":
                    drawBorder(getDivs(), "red");
                    break;
                case "btn_links":
                    drawBorder(getLinks(), "blue");
                    break;
                case "btn_p":
                    drawBorder(getPs(), "green");
                    break;

            }
        }

        function getDivs() {
            return [document.getElementById("div_id")];
        }

        function getLinks() {
            return document.getElementsByTagName("a");
        }

        function getPs() {
            return document.querySelectorAll("p");
        }



        function drawBorder(htmlCollection, color) {
            for (var id in htmlCollection) {
                htmlCollection[id].style.border = "4px double " + color;
            }
        }
    }

})(document);
