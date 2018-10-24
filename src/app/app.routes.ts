import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const rutas:Routes = [
    {
        path:'',component:HomeComponent
    }
]

export const rutasProyecto = RouterModule.forRoot(rutas);