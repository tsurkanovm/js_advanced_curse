window.onload = function () {
    var submit = document.querySelector("form>button");
    var hasError;
    var firstClick = true;
    var login = document.getElementById("login");

    submit.onclick = function () {
        validateOnEmpty();
        validateEmail();
        validatePsw();
        if(hasError){
            return false;
        }
    };

    function validateOnEmpty() {
        login.onfocus();
        var inputs = document.getElementsByTagName("input");
        for(var i = 0; i < inputs.length; i++){
            var needToCheck = inputs[i].dataset.empty;
            if(needToCheck){
                var errorElement = document.getElementById(inputs[i].dataset.describedby);
                if(errorElement){
                    toggleError(inputs[i].value, errorElement);
                }
            }
        }
    }

    function validatePsw() {
        var psw = document.getElementById("psw");
        var pswConfirm = document.getElementById("pswConfirm");
        var errorElement = document.getElementById(pswConfirm.dataset.describedby);

        toggleError(psw.value == pswConfirm.value, errorElement);
    }

    function validateEmail() {
        var email = document.getElementById("email");
        var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        var errorElement = document.getElementById(email.dataset.describedby);

        toggleError(pattern.test(email.value), errorElement);

    }

    function toggleError(condition, errorElement) {
        if(condition){
            errorElement.classList.remove("visible");
        } else {
            errorElement.classList.add("visible");
            hasError = true;
        }
    }


// === placeholder functionality ============
    login.onfocus = function () {
        if(firstClick) {
            login.value = '';
            login.classList.remove("watermark");
        }

    };

    login.onblur = function () {
        if(login.value){
            firstClick = false;
        } else {
            login.value = "Enter login";
            firstClick = true;
            login.classList.add("watermark");
        }
    }
};
