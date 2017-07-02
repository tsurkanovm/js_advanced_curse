window.onload = function () {
    function Calculator() {


        var form = document.calculator;

        function calculated() {
            var hxr = new XMLHttpRequest();
            hxr.open("Post","Calculator.php");
            hxr.onreadystatechange = function (e) {
                if(e.target.readyState == 4 && e.target.status == 200){
                    console.log(e.target.responseText);
                    document.getElementById("response").innerHTML = e.target.responseText;
                }
            }
            hxr.send("a=hello&b=world");

        }

        function focused(e) {
            var el = e.target;
            if (el.value == "0") {
                el.value = "";
            }
        }

        function filtered(e) {
            // only digits + enter
            var allowedCodes = [49, 50, 51, 52, 53, 54, 55, 56, 57, 13];
            if (!allowedCodes.includes(e.charCode)) {
                e.preventDefault();
            }
        }

        form.addEventListener('change', calculated, true);
        form.addEventListener('keypress', filtered, true);
        form.first.addEventListener('focus', focused, false);
        form.second.addEventListener('focus', focused, false);
    }

    function DragDrop() {
        var content = document.getElementById("content");

        function start(e) {
            this.diffX = e.clientX - this.offsetLeft;
            this.diffY = e.clientY - this.offsetTop;
            var self = this;

            document.addEventListener("mousemove", move);

            document.addEventListener("mouseup", function () {
                document.removeEventListener("mousemove", move);
            });

            function move(e) {
                self.style.left = e.clientX - self.diffX + 'px';
                self.style.top = e.clientY - self.diffY + 'px';
            }
        }

        content.addEventListener("mousedown", start);
    }

    Calculator();
    // DragDrop();


};
