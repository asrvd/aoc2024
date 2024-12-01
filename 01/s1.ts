const i = Deno.readTextFileSync("./01/input.txt");

const lines = i.split("\n");

const left: number[] = [];
const right: number[] = [];

for (const line of lines) {
  const [l, r] = line.trim().split("   ");
  left.push(parseInt(l));
  right.push(parseInt(r));
}

left.sort((a, b) => a - b);
right.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < left.length; i++) {
  sum += Math.abs(left[i] - right[i]);
}

console.log(sum);
