window.onload = function () {
    function Calculator() {


        var form = document.forms[0];

        function calculated(e) {
            var operation = form.operation.value;
            switch (operation) {
                case "-":
                    form.result.value = Number(form.first.value) - Number(form.second.value);
                    break;
                case "*":
                    form.result.value = Number(form.first.value) * Number(form.second.value);
                    break;
                case "/":
                    form.result.value = (Number(form.second.value) == 0) ? 0 : (Number(form.first.value) / Number(form.second.value)).toFixed(2);
                    break;
                default:
                    form.result.value = Number(form.first.value) + Number(form.second.value);
            }
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
    DragDrop();
};
