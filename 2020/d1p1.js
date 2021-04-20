import { time, timeEnd } from "console";
import fs from "fs";

console.time("d1p1");
const givenData = fs.readFileSync("./d1p1.txt").toString();

let sum = 0;

let givenDataToList = givenData.split("\r\n");
console.log(typeof givenDataToList);
let givenDataToListCopy = [...givenDataToList].shift();
console.log(givenDataToListCopy);

const calc = (givenDataToList) => {
  for (let i = 0; i < givenDataToList.length; i++) {
    // givenDataToListCopy.shift();
    for (let j = 0; j < givenDataToListCopy.length; j++) {
      if (givenDataToList[i] === givenDataToListCopy[j]) {
        // console.log("cont1");
        continue;
      } else {
        if (
          parseInt(givenDataToList[i]) + parseInt(givenDataToListCopy[j]) ===
          2020
        ) {
          return [
            givenDataToList[i],
            givenDataToListCopy[j],
            i,
            j,
            parseInt(givenDataToList[i]) * parseInt(givenDataToListCopy[j]),
          ];
        } else {
          // console.log("cont2", i, j);
          continue;
        }
      }
    }
    // givenDataToListCopy.shift();
  }
};

let ret = calc(givenDataToList);
console.log("done", ret);

console.timeEnd("d1p1");
