jQuery(function(){
    var viewModelTemplateConstructor = function()
    {
        this.first = {
            theTitle:ko.observable("Hello World"),
            theContent:ko.observable("Back to Hello World")
        };
        this.second = {
            theTitle:ko.observable("Goodbye World"),
            theContent:ko.observable("We're sailing west now")
        };
    };

    viewModel = new viewModelTemplateConstructor;
    ko.applyBindings(viewModel);
});
