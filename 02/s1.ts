const i = Deno.readTextFileSync("./02/input.txt");

const lines = i.split("\n");

const rows: number[][] = lines.map((line) =>
  line
    .trim()
    .split(" ")
    .map((n) => parseInt(n))
);

let safe = 0;

for (const row of rows) {
  const firstIncreasing = row[0] < row[1];
  let rowSafe = false;

  for (let i = 0; i < row.length - 1; i ++) {
    const isIncreasing = row[i] < row[i + 1];

    if (
      isIncreasing == firstIncreasing &&
      [1, 2, 3].includes(Math.abs(row[i] - row[i + 1]))
    ) {
      rowSafe = true;
    } else {
      rowSafe = false;
      break;
    }
  }

  if (rowSafe) {
    safe++;
  }
}

console.log(safe);
