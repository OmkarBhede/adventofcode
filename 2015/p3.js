import fs from "fs";

const givenData = fs.readFileSync("./puzzel3.txt").toString();

let obj = { "0,0": 1 };

let xs = 0;
let ys = 0;

let xr = 0;
let yr = 0;

for (let i = 0; i < givenData.length; i++) {
  if (givenData.charAt(i) % 2 === 0) {
    switch (givenData.charAt(i)) {
      case "^":
        xs += 1;
        break;
      case "<":
        ys -= 1;
        break;
      case ">":
        ys += 1;
        break;
      case "v":
        xs -= 1;
        break;
      default:
        console.log("error");
        break;
    }
    let checkStrS = xs.toString() + "," + ys.toString();

    if (!(checkStrS in obj)) {
      obj[checkStrS] = 1;
    } else {
      obj[checkStrS] = obj[checkStrS] + 1;
    }
  } else {
    switch (givenData.charAt(i)) {
      case "^":
        xr += 1;
        break;
      case "<":
        yr -= 1;
        break;
      case ">":
        yr += 1;
        break;
      case "v":
        xr -= 1;
        break;
      default:
        console.log("error");
        break;
    }

    let checkStrR = xr.toString() + "," + yr.toString();

    if (!(checkStrR in obj)) {
      obj[checkStrR] = 1;
    } else {
      obj[checkStrR] = obj[checkStrR] + 1;
    }
  }
}
console.log(obj);
console.log(Object.keys(obj).length);
