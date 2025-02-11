import { Routes } from '@angular/router';
import { TablaDatosComponent } from './vistas/tabla-datos/tabla-datos.component';
import { HomeComponent } from './vistas/home/home.component';

export const routes: Routes = [
    {
        path:'vistas/home',
        component: HomeComponent,
    },
    {
        path: 'vistas/tabla-datos',
        component: TablaDatosComponent,
    },
    {
        path: '',
        redirectTo: 'vistas/home', pathMatch: 'full',
    }
];
