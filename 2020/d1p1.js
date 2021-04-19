import fs from "fs";

const givenData = fs.readFileSync("./d1p1.txt").toString();

let sum = 0;

let givenDataToList = givenData.split("\r\n");
for (let i = 0; i < givenDataToList.length; i++) {
  for (let j = 0; j < givenDataToList.length; j++) {
    if (givenDataToList[i] === givenDataToList[j]) {
      continue;
    } else {
      if (
        parseInt(givenDataToList[i]) + parseInt(givenDataToList[j]) ===
        2020
      ) {
        console.log(
          givenDataToList[i],
          givenDataToList[j],
          i,
          j,
          parseInt(givenDataToList[i]) * parseInt(givenDataToList[j])
        );
      } else {
        continue;
      }
    }
  }
}

console.log("done");
