Tiny Programming Language Interpreter

I built a tiny programming language that controls a “robot” on a canvas.
It can move, turn, and repeat blocks of commands. The goal was to experiment with how interpreters work and make something visual and fun at the same time.

Features

MOVE <number> — moves the robot forward

TURN LEFT / RIGHT — turns the robot

REPEAT <number> { … } — repeat a block of commands

Nested loops

Draws directly on the canvas

It’s simple, but it shows some core programming concepts.

How It Works

You type commands in the textarea.

The interpreter splits them into lines and checks each command.

REPEAT blocks are handled recursively.

MOVE and TURN change the robot’s position and angle.

Lines are drawn on the canvas as the robot moves.

Why This Is Interesting

I wanted a project that shows real computer science thinking, not just a web app.
It demonstrates:

Parsing simple instructions

Handling nested blocks and loops

Keeping track of a robot’s state (position and angle)

Recursive logic and control flow

It’s small, but you can see the theory behind programming languages in action.

How to Run

Open index.html in your browser.

Type your commands in the text box.

Click “Run” to see the robot draw.

No installation needed.

Example Programs
Draw a Square
REPEAT 4 {
  MOVE 100
  TURN RIGHT
}

Spiral
MOVE 10
TURN RIGHT
MOVE 20
TURN RIGHT
MOVE 30
TURN RIGHT
MOVE 40
TURN RIGHT

Star Pattern
REPEAT 36 {
  MOVE 50
  TURN RIGHT
  MOVE 10
  TURN RIGHT
}

Notes

I wrote this to learn about interpreters and loops, and to have a project that’s both fun and educational.
It’s easy to extend with more commands if you want to experiment.
