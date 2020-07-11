//BUDGER Controller

var budgetController = (function () {
  //some code
})();

//UI Controller
var UIController = (function () {
  var DOMString = {
    inputType: ".add__type",
    inputDesc: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
  };

  var _getDomString = function () {
    return DOMString;
  };

  var _getInput = function () {
    return {
      type: document.querySelector(DOMString.inputType).value, //inc or exp
      desc: document.querySelector(DOMString.inputDesc).value,
      value: document.querySelector(DOMString.inputValue).value,
    };
  };

  return {
    getInput: _getInput,
    getDomString: _getDomString,
  };
})();

//Global app controller
var controller = (function (budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDomString();

  var ctrlAddItem = function () {
    //1.Get the field input data
    var input = UICtrl.getInput();
    console.log(input);
    //2. Add the item to the budget controller
    //3. Add the item to the UI
    //4. Calculate the budget
    //5. Display the budget
  };

  document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
