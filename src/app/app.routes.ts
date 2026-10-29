import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PjEdit } from './components/pj-edit/pj-edit';

export const routes: Routes = [
    { path:'',component:Home },
    { path:'**', redirectTo:'' },
    { path:'edit', component:PjEdit}
];
