(function (window) {
    window.Timer = function (hourEl, minEl, secEl) {
        this.hourEl = hourEl;
        this.minEl = minEl;
        this.secEl = secEl;
    };

    window.Timer.prototype.init = function () {
        this.reset();

    };

    window.Timer.prototype.start = function (e) {
        var self = this;

        this.timer = setInterval(timerFunc, 1000);
        function timerFunc() {
            if(Helper.getElValue(self.secEl) == 59){
                if(Helper.getElValue(self.minEl) == 59){
                    Helper.clearEl(self.minEl);
                    Helper.incrementValue(self.hourEl);
                }
                Helper.clearEl(self.secEl);
                Helper.incrementValue(self.minEl);
            }
            Helper.incrementValue(self.secEl);
        }
    };

    window.Timer.prototype.reset = function () {
        Helper.clearEl(this.hourEl);
        Helper.clearEl(this.minEl);
        Helper.clearEl(this.secEl);
    };

    window.Timer.prototype.stop = function () {
        clearInterval(this.timer);
    };

    var Helper = {
        'clearEl':function (el) {
            this.setElValue(el, '00')
        },
        'setElValue':function (el, val) {
            el.innerText = this.format(val);
        },
        'incrementValue':function (el) {
            el.innerText = this.format(this.getElValue(el) + 1);
        },
        'getElValue':function (el) {
            return Number(el.innerText);
        },
        'format':function (value) {
            if(value < 10 && value > 0)
                return 0 + String(value);

            return value;
        }
    };
})(window);
