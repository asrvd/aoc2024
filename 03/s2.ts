const i = await Deno.readTextFile("./03/input.txt");

const mulRegex = /mul\(([0-9]+),([0-9]+)\)/g;
const doRegex = /do\(\)/g;
const dontRegex = /don't\(\)/g;

let sum = 0;
let enabled = true;

const allMatches = [...i.matchAll(new RegExp(`${mulRegex.source}|${doRegex.source}|${dontRegex.source}`, 'g'))];

for (const match of allMatches) {
    const fullMatch = match[0];
    
    if (fullMatch === 'do()') {
        enabled = true;
    } else if (fullMatch === "don't()") {
        enabled = false;
    } else if (enabled && fullMatch.startsWith('mul')) {
        const [_, num1, num2] = match;
        sum += parseInt(num1) * parseInt(num2);
    }
}

console.log(sum);

