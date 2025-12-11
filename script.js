// --- Robot state ---
let x = 250, y = 250;
let angle = 0; // degrees
let ctx;

window.onload = () => {
  const canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  clearCanvas();
};

// clear and reset robot
function clearCanvas() {
  ctx.clearRect(0, 0, 500, 500);
  x = 250; 
  y = 250;
  angle = 0;
}

// MAIN entry
function runProgram() {
  clearCanvas();

  const programText = document.getElementById("program").value;
  const lines = programText.split("\n").map(l => l.trim()).filter(l => l.length > 0);

  executeBlock(lines);
}

// Executes a list of commands
function executeBlock(lines) {
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("MOVE")) {
      const amount = parseFloat(line.split(" ")[1]);
      move(amount);

    } else if (line.startsWith("TURN")) {
      const dir = line.split(" ")[1];
      turn(dir);

    } else if (line.startsWith("REPEAT")) {
      const count = parseInt(line.split(" ")[1]);
      const block = extractBlock(lines, i);
      for (let c = 0; c < count; c++) {
        executeBlock(block.contents);
      }
      i = block.end;

    } else {
      console.log("Unknown instruction:", line);
    }

    i++;
  }
}

// Extracts lines inside { ... }
function extractBlock(lines, startIndex) {
  let blockLines = [];
  let depth = 0;
  let i = startIndex;

  // Find the next "{"
  while (!lines[i].includes("{")) i++;

  depth++;
  i++;

  while (i < lines.length && depth > 0) {
    if (lines[i].includes("{")) depth++;
    else if (lines[i].includes("}")) depth--;

    if (depth > 0) blockLines.push(lines[i]);
    i++;
  }

  return { contents: blockLines, end: i - 1 };
}

function move(amount) {
  const rad = angle * Math.PI / 180;
  const newX = x + Math.cos(rad) * amount;
  const newY = y + Math.sin(rad) * amount;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(newX, newY);
  ctx.stroke();

  x = newX;
  y = newY;
}

function turn(direction) {
  if (direction === "LEFT") angle -= 90;
  if (direction === "RIGHT") angle += 90;
}
