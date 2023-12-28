jQuery(function(){
    let viewModelConstructor = function()
    {
        this.theValue = ko.observable(0);
        this.optionsCaption1 = 'first list ...';
        this.options = ko.observableArray(['option - 1', 'option - 2']);
        this.selectedOpt = 'option - 2';
        this.add = function(){
            this.options.push(`option - ${this.options().length + 1}`);
            this.theValue(this.options().length);
        };

        // for the second list
        this.optionsCaption2 = 'Second list ...';
        this.optionsObj = ko.observableArray(
            [{label: 'opt1', value:1}, {label: 'opt2', value:2}]
        );
    };

    let viewModelComputed = function()
    {
        this.name  = ko.observable('');
        this.sec  = ko.observable('');
        this.cardHolder  = ko.observable('');

        // pure only for return
        // this.customerName = ko.pureComputed(function () {
        //     return `${this.name()} ${this.sec()}`;
        // }, this);

        // if we set something needs use computed instead of pureComputed
        this.customerName = ko.pureComputed(function () {
            let fullName = `${this.name()} ${this.sec()}`;
            this.cardHolder(fullName.toUpperCase());

            return fullName;
        }, this);
    }

    let viewModelForeach = function()
    {
        this.collection = ko.observableArray([['first', 'second'], ['third']]);

        this.onClick = function(element, event){
            console.log('Event is ', event);
            console.log('Value is ', element);
        };
    }


    ko.applyBindings(new viewModelConstructor, main);
    ko.applyBindings(new viewModelComputed, computed);
    ko.applyBindings(new viewModelForeach, cycle);
});
