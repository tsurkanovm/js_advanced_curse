
require(['moduleB', 'moduleC'], function (modB){}); // A - first, B and C will load in random order


//require(['moduleB'], function (modB){});
//require(['moduleC'], function (modC){});  // A, B first C second
