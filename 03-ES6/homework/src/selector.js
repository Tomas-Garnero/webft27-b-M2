var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien
  // startEl = <body></body>

  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }

  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet,...elements];
  }
  
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

/* Ejemplo:
selectorTypeMatcher("#primero");  // --> id
selectorTypeMatcher(".segundo");  // --> class
selectorTypeMatcher("div");  // --> tag
selectorTypeMatcher("div.tercero");  // --> tag.class
*/
var selectorTypeMatcher = function(selector) {
  if (selector[0] === "#") {
    return "id";

  } else if (selector[0] === ".") {
    return "class";
  } 

  // selector.split(".") --> [tag, class] > 1
  if (selector.split(".").length > 1) {
    return "tag.class";
  }

  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  // selector -> "#primero"
  // selectorType -> "id"

  var selectorType = selectorTypeMatcher(selector);  // id | class | tag | tag.class
  var matchFunction;

  if (selectorType === "id") { 
    matchFunction = function(el) {
      return "#" + el.id === selector;
    }

  } else if (selectorType === "class") {
    // el = <div class= "class1 class2 class3"></div>
    matchFunction = function(el) {
      let classes = el.classList;  // [class1, class2, class3]
      // classes.forEach(e => {if (`.${e}` === selector) return true;})
      // return false;
      for (let i = 0; i < classes.length; i++) {
        if (`.${classes[i]}` === selector) return true;
      }
      return false;
    }

  } else if (selectorType === "tag.class") {
    // selector -> "p.small"
    // el = <p class = "small"></p>
    matchFunction = function(el) {
      var [tagBuscado, classBuscada] = selector.split(".");  // ["p", "small"]

      // let tag = matchFunctionMaker(tagBuscado);
      // tag(el);  // tag -> function(el) -> true / false
      return matchFunctionMaker(tagBuscado)(el) && matchFunctionMaker(`.${classBuscada}`)(el);
    }

  } else if (selectorType === "tag") {
    // el = <div class= "primero">Holaaa</div>
    // el.tagName = "DIV"
    //el.tagName.toLowerCase() = "div"
    
    matchFunction = function(el) {
      return el.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};

/*
$("img");   // selector = ("img")
elements
selectorMatchFunc = matchFunctionMaker("img");
selectorType = selectorTypeMatcher("img");
matchFunction
matchFunction("img")






// Stack de ejecución

matchFunction("img") 
selectorTypeMatcher("img") ---> "tag"
matchFunctionMaker("img")
*/
