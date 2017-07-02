var ParagraphChanger = (function (d) {

    function getElements() {
        return d.getElementsByTagName("p");
    }

    function change() {
        var arrEl = getElements();
        for (var i=0; i < arrEl.length; i++) {
            console.log(arrEl[i].innerHTML, arrEl[i].innerText);
            arrEl[i].innerHTML = "PARAGRAPH";
        }
    }

    return {
        "change":change
    }
})(document);
