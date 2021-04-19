import fs from "fs";

const givenData2 = fs.readFileSync("./puzzel2.txt").toString();

const splitedData = givenData2.split("\r\n");
console.log(splitedData);

// for (let i = 0; i < givenData2.length; i++) {
//   console.log(givenData2.charAt(i));
// }
let sum = 0;
const calcualtion = (eachData) => {
  let eachSum = 0;
  eachData.sort();
  let a = eachData[0];
  let b = eachData[1];
  let c = eachData[2];
  eachSum = a * b * 2 + b * c * 2 + c * a * 2 + a * b;

  return eachSum;
};

for (let i = 0; i < splitedData.length; i++) {
  let eachData = splitedData[i].split("x");

  sum = sum + calcualtion(eachData);
}

console.log(sum);
