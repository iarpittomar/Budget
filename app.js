//BUDGER Controller

var budgetController = (function () {
  var Expense = function (id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

  var Income = function (id, desc, value) {
    this.id = id;
    this.desc = desc;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
  };

  function _addItem(type, desc, val) {
    var newItem, ID;

    //create new ID
    if (data.allItems[type].length > 0) {
      ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
    } else {
      ID = 0;
    }

    //create new item based on 'inc' or 'exp' type
    if (type === "exp") {
      newItem = new Expense(ID, desc, val);
    } else if (type === "inc") {
      newItem = new Income(ID, desc, val);
    }

    //push it into our data structure
    data.allItems[type].push(newItem);

    //return the new element
    return newItem;
  }

  function _deleteItem(type, id) {
    var ids, index;

    ids = data.allItems[type].map(function (item, index) {
      return item.id;
    });

    index = ids.indexOf(id);

    if (index !== -1) {
      data.allItems[type].splice(index, 1);
    }
  }

  return {
    addItem: _addItem,
    deleteItem: _deleteItem,
  };
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

  function _addListItem(obj, type) {
    //create html string with placeholder text
    //replace the placeholder text with some actual data
    //Insert the HTML code into the DOM
  }

  return {
    getInput: _getInput,
    getDomString: _getDomString,
    addListItem: _addListItem,
  };
})();

//Global app controller
var controller = (function (budgetCtrl, UICtrl) {
  var setupEventListeners = function () {
    var DOM = UICtrl.getDomString();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });
  };

  var ctrlAddItem = function () {
    var input, newItem;
    //1.Get the field input data
    input = UICtrl.getInput();
    console.log(input);
    //2. Add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.desc, input.value);
    //3. Add the item to the UI
    UICtrl.addListItem(newItem);
    //4. Calculate the budget
    //5. Display the budget
  };

  return {
    init: function () {
      setupEventListeners();
    },
  };
})(budgetController, UIController);

controller.init();
