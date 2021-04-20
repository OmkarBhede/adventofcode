import fs from "fs";

const givenData = fs.readFileSync("./d2p2.txt").toString();

const givendatatoList = givenData.split("\r\n");
let ans = 0;
for (let i = 0; i < givendatatoList.length; i++) {
  let eachData = givendatatoList[i].split(" ");
  let numbers = eachData[0].split("-"); //array of char
  let checkChar = eachData[1].substring(0, eachData[1].length - 1); // char
  let str = eachData[2].split(""); // array char
  if (
    str[parseInt(numbers[0]) - 1] === checkChar &&
    str[parseInt(numbers[1]) - 1] === checkChar
  ) {
    continue;
  } else if (
    !(
      str[parseInt(numbers[0]) - 1] === checkChar ||
      str[parseInt(numbers[1]) - 1] === checkChar
    )
  ) {
    continue;
  } else if (
    str[parseInt(numbers[0]) - 1] === checkChar ||
    str[parseInt(numbers[1]) - 1] === checkChar
  ) {
    ans += 1;
  }
}

console.log(ans);
