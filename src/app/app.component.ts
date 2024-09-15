import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, combineLatest, from, fromEvent, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
})
export class AppComponent {
  users = [
    { id: '1', name: 'John', age: 30 },
    { id: '2', name: 'Jack', age: 35 },
    { id: '3', name: 'Mike', age: 25 },
  ];
  messagePromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 1000);
  });

  foo$ = new Observable((observer) => {
    observer.next('foo');
    setTimeout(() => {
      observer.next('bar');
    }, 3000);
  });

  data$ = combineLatest({
    users: of(this.users),
    messagePromise: from(this.messagePromise),
    foo: this.foo$,
  });
}
