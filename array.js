const demoArrayString = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const newArray = demoArrayString.map((item, index) => {
  return item.toUpperCase();
});

console.log(newArray);

const newArray2 = [];
demoArrayString.forEach((item, index) => {
  console.log(item);
  newArray2.push(item.toUpperCase());
});

console.log(newArray2);
