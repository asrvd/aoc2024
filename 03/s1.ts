const i = await Deno.readTextFile("./03/input.txt");

const validRegex = /mul\(([0-9]+),([0-9]+)\)/g;

const matches = i.matchAll(validRegex);

let sum = 0;

for (const match of matches) {
  sum += parseInt(match[1]) * parseInt(match[2]);
}

console.log(sum);
