const i = Deno.readTextFileSync("./01/input.txt");

const lines = i.split("\n");

const left: number[] = [];
const right: number[] = [];

for (const line of lines) {
  const [l, r] = line.trim().split("   ");
  left.push(parseInt(l));
  right.push(parseInt(r));
}

const rightHash = new Map<number, number>();

for (let i = 0; i < right.length; i++) {
  rightHash.set(right[i], (rightHash.get(right[i]) ?? 0) + 1);
}

let sum = 0;

for (let i = 0; i < left.length; i++) {
  sum += left[i] * (rightHash.get(left[i]) ?? 0);
}

console.log(sum);
