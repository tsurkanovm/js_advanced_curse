window.onload = function () {
    var Menu = {
        "small": 100,
        "medium": 200,
        "large": 300,
        "small_coef": 1,
        "medium_coef": 1.5,
        "large_coef": 2,
        "tomato"   :20,
        "cheese"   :40,
        "mushrooms":50,
        "olives"   :45,
        "beacon"   :80,
        "salad"    :15
    };

    window.MenuCalculator = function (size, ingredients) {
        this.size = size;
        this.ingredients = ingredients;
    };

    window.MenuCalculator.prototype.calculate = function (menu) {
        if(!menu){
            menu = Menu;
        }
        var totalIng = 0;
        for(var i=0; i < this.ingredients.length; i++){
            totalIng += menu[this.ingredients[i].value];
        }

        return menu[this.size] + (menu[this.size + "_coef"] * totalIng);
    }
}
