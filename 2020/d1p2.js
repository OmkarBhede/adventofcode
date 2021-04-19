import fs from "fs";

const givenData = fs.readFileSync("./d1p2.txt").toString();

let sum = 0;

let givenDataToList = givenData.split("\r\n");
for (let i = 0; i < givenDataToList.length; i++) {
  for (let j = 0; j < givenDataToList.length; j++) {
    for (let k = 0; k < givenDataToList.length; k++) {
      if (
        givenDataToList[i] === givenDataToList[j] ||
        givenDataToList[k] === givenDataToList[j] ||
        givenDataToList[i] === givenDataToList[k]
      ) {
        continue;
      } else {
        if (
          parseInt(givenDataToList[i]) +
            parseInt(givenDataToList[j]) +
            parseInt(givenDataToList[k]) ===
          2020
        ) {
          console.log(
            givenDataToList[i],
            givenDataToList[j],
            givenDataToList[k],
            i,
            j,
            k,
            parseInt(givenDataToList[i]) *
              parseInt(givenDataToList[j] * parseInt(givenDataToList[k]))
          );
        } else {
          continue;
        }
      }
    }
  }
}

console.log("done");
