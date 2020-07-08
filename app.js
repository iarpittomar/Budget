var budgetController = (function () {
  var x = 7;

  var add = function (a) {
    return x + a;
  };

  return {
    publicTest: function (b) {
      console.log(add(b));
    },
  };
})();

var UIController = (function () {
  var a = "s";
})();

var controller = (function (budgetCtrl, UICtrl) {
  var c = "";
})(budgetController, UIController);
