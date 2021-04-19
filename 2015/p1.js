import fs from "fs";

console.time("timer");
const givenData = fs.readFileSync("./puzzel1.txt").toString();
let value = 0;

let obj = {
  0: 0,
};
// fs.readFile("./puzzel.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//     // givenData = data.toString();
//   }
// });

for (let i = 0; i < givenData.length; i++) {
  if (givenData.charAt(i) === "(") {
    value += 1;
  } else if (givenData.charAt(i) === ")") {
    value -= 1;
  } else {
    console.log("error");
  }
  if (!(value in obj)) {
    obj[value] = i + 1;
  }
}
// for (const c of givenData) {
//   i += 1;
//   if (c === "(") {
//     value += 1;
//   } else if (c === ")") {
//     value -= 1;
//   }
// //   console.log(value in obj);
//   if (value in obj) {
//     obj.value = i;
//   }
// }

console.log(obj[-1]);
console.timeEnd("timer");
