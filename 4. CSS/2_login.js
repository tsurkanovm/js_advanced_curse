(function () {
    window.onload = function () {
        var loginInput = document.getElementsByName("login")[0];
        var pswInput = document.getElementsByName("psw")[0];
        var loginErr = document.getElementById("login_error");
        var pswErr = document.getElementById("psw_error");
        var msg = document.getElementById("success_msg");
        var btn = document.getElementsByTagName("button")[0];

        function init() {
            loginInput.classList.remove("Error");
            pswInput.classList.remove("Error");
            loginErr.classList.remove("ErrorMsg");
            pswErr.classList.remove("ErrorMsg");
            msg.classList.remove("Success");;
        }

        function markElementAsError(el, msg) {
            el.className = "Error";
            msg.className = "ErrorMsg";
        }

        function validate() {
            var hasError = false;
            init();
            if (loginInput.value) {
                var pattern = /[^a-zA-Z_]/;
                var firstLetterPattern = /^_/;
                if (pattern.test(loginInput.value) || firstLetterPattern.test(loginInput.value)) {
                    markElementAsError(loginInput, loginErr);
                    loginErr.innerText = "Incorrect login";
                    hasError = true;
                }

            } else {
                markElementAsError(loginInput, loginErr);
                loginErr.innerText = "Login shouldn't be empty";
                hasError = true;
            }

            if (pswInput.value) {

                if (pswInput.value.length < 5) {
                    markElementAsError(pswInput, pswErr);
                    pswErr.innerText = "Password should be more then 5 symbols";
                    hasError = true;
                }

            } else {
                markElementAsError(pswInput, pswErr);
                pswErr.innerText = "Password shouldn't be empty";
                hasError = true;
            }

            if (!hasError) {
                msg.innerText = "Success!!!!!!!!!";
                msg.className = "Success";
            }
        }

        btn.onclick = validate;
    };
})();
