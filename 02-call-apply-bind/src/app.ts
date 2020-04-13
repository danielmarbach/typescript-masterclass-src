// Object literal
const myObj = {
  myMethod() {
    console.log('Object:::', this);
  },
};
// myObj.myMethod();

// Function
function myFunction(...text: string[]) {
  console.log('Function:::', this, text);
}
// binds this to myObject
const bindFunction = myFunction.bind(myObj);
bindFunction('ABC', 'DEF');
bindFunction('123', '456');
bindFunction('ABC', 'DEF');
// calls the function with this set to myObj and passes these comma seperated args into it
myFunction.call(myObj, 'ABC', 'DEF');
// does the same as above but passes an array along
myFunction.apply(myObj, ['ABC', 'DEF']);
