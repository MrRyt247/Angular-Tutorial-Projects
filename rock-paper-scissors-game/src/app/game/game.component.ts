import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  choices: string[] = ['Rock', 'Paper', 'Scissors'];
  playerChoice: string | null = null;
  computerChoice: string | null = null;
  result: string | null = null;

  getRandomNumber(max: number): number {
    return Math.floor(Math.random() * 3);
  }

  determineWinner(player: string, computer: string): string {
    if (player === computer) return "It's a draw!";
    if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Scissors' && computer === 'Paper') ||
      (player === 'Paper' && computer === 'Rock')
    ) {
      return 'You win!';
    } else {
      return 'You lose!';
    }
  }

  play(choice: string) {
    this.playerChoice = choice;
    this.computerChoice =
      this.choices[this.getRandomNumber(this.choices.length)];
    this.result = this.determineWinner(this.playerChoice, this.computerChoice);
    }
}
