

function receivesAFunction(callback) {
    return callback();
  }
  
function returnsANamedFunction() {
    return function someString () {
      return "hello";
    };
  }
  
  console.log(returnsANamedFunction("Hello"))


function returnsAnAnonymousFunction() {
    return function () {
      return `anonymous`;
    };
  }
  
console.log(returnsAnAnonymousFunction());