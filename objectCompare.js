obj1 = {
  name: "object",
  id: 5
};
obj2 = {
  id: 5,
  name: "object"
};
var c = 0;
for (var i in obj1) {
  if (obj1[i] == obj2[i]) {
    c++;
  }
}

const propObj1 = Object.getOwnPropertyNames(obj1);
const propObj2 = Object.getOwnPropertyNames(obj2);
// console.log(propObj1);

if (c == propObj1.length && c == propObj2.length) {
  console.log("same objects");
}
