import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {filter, map, Observable} from 'rxjs';


interface BackendState {
  api_url: string;
  real_views: number;
  roles: string[];
}

interface State {
  apiUrl: string;
  realViews: number;
  roles: string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  backendState$: Observable<BackendState | null> = new Observable(
    (observer) => {
      observer.next(null);
      setTimeout(() => {
        observer.next({
          api_url: 'http://localhost:3004',
          real_views: 1000,
          roles: ['admin', 'user'],
        });
      }, 2000);
    },
  );

  state$: Observable<State> = this.backendState$.pipe(
    filter(Boolean),
    map((backendState) => {
      return {
        apiUrl: backendState.api_url,
        realViews: backendState.real_views,
        roles: backendState.roles,
      }
    }),
  )
}
