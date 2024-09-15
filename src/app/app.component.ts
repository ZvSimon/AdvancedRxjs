import {Component, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {Observable, withLatestFrom} from "rxjs";


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
    const customValue$ = new Observable((observer) => {
      observer.next('initial value');
      setTimeout(()=>{
        observer.next('new value');
      },1000);
    });
    const post$ = this.http.get('http://localhost:3004/posts');
    post$.pipe(withLatestFrom(customValue$)).subscribe((result) => {
      console.log(result);
    });
  }
}
