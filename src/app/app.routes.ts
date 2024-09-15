import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostsComponent } from './posts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'posts', component: PostsComponent },
];
