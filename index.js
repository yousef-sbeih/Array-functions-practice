const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// 1 Get an array of all names
const q1 = characters.map((el) => el.name);
console.log("q1 =>", q1);
// 2 Get an array of all heights
const q2 = characters.map((el) => el.height);
console.log("q2 =>", q2);
// 3 Get an array of objects with just name and height properties
const q3 = characters.map((el) => {
  return { name: el.name, height: el.height };
});
console.log("q3 =>", q3);
// 4 Get an array of all first names
const q4 = characters.map((el) => el.name.split(" ")[0]);
console.log("q4 =>", q4);

// 5 Get the total mass of all characters
const q5 = characters.reduce((pre, curr) => pre + parseInt(curr.mass), 0);
console.log("q5 =>", q5);
// 6 Get the total height of all characters
const q6 = characters.reduce((pre, curr) => pre + parseInt(curr.height), 0);
console.log("q6 =>", q6);
// 7 Get the total number of characters in all the character names
const q7 = characters.reduce((pre, curr) => pre + curr.name.length, 0);
console.log("q7 =>", q7);
// 8 Get the total number of characters by eye color (hint. a map of eye color to count)
const q8 = characters.reduce((pre, curr) => pre + curr.eye_color.length, 0);
console.log("q8 =>", q8);

// 9 Get characters with mass greater than 100
const q9 = characters.filter((el) => parseInt(el.mass) > 100);
console.log("q9 =>", q9);
// 10 Get characters with height less than 200
const q10 = characters.filter((el) => parseInt(el.height) < 200);
console.log("q10 =>", q10);
// 11 Get all male characters
const q11 = characters.filter((el) => el.gender === "male");
console.log("q11 =>", q11);
// 12 Get all female characters
const q12 = characters.filter((el) => el.gender === "female");
console.log("q12 =>", q12);

const compareNums = (a, b) => a - b;
// 13 Sort by name
const q13 = characters.sort((a, b) => {
  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
  else if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
  return 0;
});
console.log("q13 =>", q13);
// 14 Sort by mass
const q14 = characters.sort((a, b) => parseInt(a.mass) - parseInt(b.mass));
console.log("q14 =>", q14);
// 15 Sort by height
const q15 = characters.sort((a, b) => parseInt(a.height) - parseInt(b.height));
console.log("q15 =>", q15);
// 16 Sort by gender
const q16 = characters.sort((a, b) => {
  if (a.gender.toLowerCase() > b.gender.toLowerCase()) return 1;
  else if (a.gender.toLowerCase() < b.gender.toLowerCase()) return -1;
  return 0;
});
console.log("q16 =>", q16);

// 17 Does every character have blue eyes?
const q17 = characters.every((el) => el.eye_color === "blue");
console.log("q17 =>", q17);
// 18 Does every character have mass more than 40?
const q18 = characters.every((el) => parseInt(el.mass) > 40);
console.log("q18 =>", q18);
// 19 Is every character shorter than 200?
const q19 = characters.every((el) => parseInt(el.height) < 200);
console.log("q19 =>", q19);
// 20 Is every character male?
const q20 = characters.every((el) => el.gender === "male");
console.log("q20 =>", q20);

// 21 Is there at least one male character?
const q21 = characters.some((el) => el.gender === "male");
console.log("q21 =>", q21);
// 22 Is there at least one character with blue eyes?
const q22 = characters.some((el) => el.eye_color === "blue");
console.log("q22 =>", q22);
// 23 Is there at least one character taller than 200?
const q23 = characters.some((el) => parseInt(el.height) > 200);
console.log("q23 =>", q23);
// 24 Is there at least one character that has mass less than 50?
const q24 = characters.some((el) => parseInt(el.mass) > 50);
console.log("q24 =>", q24);
