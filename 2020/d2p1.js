import fs from "fs";

const givenData = fs.readFileSync("./d2p1.txt").toString();

const givenDatatoList = givenData.split("\r\n");
console.log(givenDatatoList);

let ans = 0;
for (let i = 0; i < givenDatatoList.length; i++) {
  let eachData = givenDatatoList[i].split(" ");

  let d = eachData[0].split("-");

  let a = d.map((ele) => {
    return parseInt(ele);
  });
  //   console.log(a);
  //   let k = a.map((ele) => {
  //     console.log(ele);
  //     return ele.sort();
  //   });

  let b = eachData[1].split(":");
  let c = eachData[2].split("");
  let count = 0;

  for (let j = 0; j < c.length; j++) {
    if (c[j] === b[0]) {
      count += 1;
    }
  }
  if (count >= a[0] && count <= a[1]) {
    console.log(true);
    ans += 1;
  }
  console.log(false, a[0], a[1], count);
}

console.log(ans);
