import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {forkJoin} from 'rxjs';
import {HttpClient} from "@angular/common/http";


interface BackendState {
  api_url: string;
  real_views: number;
  roles: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  http = inject(HttpClient);

  constructor() {
    const post$ = this.http.get<BackendState>('http://localhost:3004/posts');
    const comments$ = this.http.get<BackendState>('http://localhost:3004/comments');
    forkJoin({posts: post$, comments: comments$}).subscribe(result => {
      console.log(result)
    });
  }
}
