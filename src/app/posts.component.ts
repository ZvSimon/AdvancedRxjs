import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'posts',
  template: `
    <div>
      <h1>Posts</h1>
      <div>{{ interval$ | async }}</div>
    </div>
  `,
  standalone: true,
  imports: [CommonModule],
})
export class PostsComponent {
  interval$ = interval(1000);

  constructor() {
    this.interval$.subscribe((i) => {
      console.log(i);
    });
  }
}
