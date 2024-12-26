# **Rock-Paper-Scissors Game**

This program simulates a 5-round game of Rock-Paper-Scissors between a human player and the computer.

## **How It Works**
- The computer randomly selects one of the three options: "rock," "paper," or "scissors."
- The user is prompted to input their choice.
- The program compares the user's choice with the computer's choice and determines the winner for each round.
- Scores for both the user and the computer are tracked across 5 rounds.
- At the end of 5 rounds, the program announces the final winner or a tie based on the scores.

## **Features**
- Randomized computer choices to ensure fairness.
- Validates user input to prevent errors (only accepts "rock," "paper," or "scissors").
- Displays the results of each round, including the choices and the winner.
- Provides a final score summary and declares the overall winner.

## **How to Play**
1. Run the program in a JavaScript environment (e.g., browser console or Node.js).
2. When prompted, type your choice: `rock`, `paper`, or `scissors`.
3. Play through 5 rounds:
   - If you and the computer choose the same, it’s a tie.
   - Rock beats Scissors, Scissors beats Paper, Paper beats Rock.
4. After all 5 rounds, the program will show:
   - **Final scores**
   - The winner: `"HUMAN WINS"`, `"COMPUTER WINS"`, or `"IT'S A TIE."`
