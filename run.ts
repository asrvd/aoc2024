// Example usage: deno task run 1 2 (runs day 1, solution 2)

if (Deno.args.length !== 2) {
  console.error("Usage: deno task run <day> <solution>");
  Deno.exit(1);
}

const day = Deno.args[0].padStart(2, "0");
const solution = Deno.args[1];

if (solution !== "1" && solution !== "2") {
  console.error("Solution number must be 1 or 2");
  Deno.exit(1);
}

const process = new Deno.Command("deno", {
  args: ["run", "--allow-all", `./${day}/s${solution}.ts`],
  stdout: "piped",
  stderr: "piped",
});

const { code, stdout, stderr } = await process.output();
await Deno.stdout.write(stdout);
await Deno.stderr.write(stderr);
Deno.exit(code);
