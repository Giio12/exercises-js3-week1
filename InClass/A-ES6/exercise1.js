// Turn this function into an arrow function
// function arrow() {
//   return "es6 is awesome!";
// }
let arrow=()=>{return ("es6 is awesome")}
console.log(arrow())


//Use the es6 syntax for default parameter
// function defaultParameter(name) {
//   var name = name || "sam"
//   return name;
// }

  function defaultParameter(name = "foo") {
    return name
  };
  console.log(defaultParameter())

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
  return [...arr1,...arr2];
}

console.log(combineArrays([2,1,2],[3,5,2]))

//use destructuring to return the object's cyf property
function destructuring(obj) {
  const{cyf}=obj
  return cyf;
}
console.log(destructuring({cyf:"Gio"}))

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
  return `The sum is equal to ${a}, ${b}`;
}
console.log(templateString("Gio","Mar"))