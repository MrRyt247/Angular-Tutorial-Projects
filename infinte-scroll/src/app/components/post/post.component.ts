import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss',
})
export class PostComponent implements OnInit {
  @Input() post!: { title: string; body: string };
  randomPhotoUrl!: string;

  ngOnInit() {
    this.genrateRandomPhoto();
  }

  private genrateRandomPhoto(): void {
    const randomSeed = this.genrateRandomNumber(1000);
    this.randomPhotoUrl = `https://picsum.photos/seed/${randomSeed}/50`;
  }

  private genrateRandomNumber(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
