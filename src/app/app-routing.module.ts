import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { MoviecardComponent } from './shared/components/home/moviecard/moviecard.component';
import { LoginComponent } from './shared/components/login/login.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SinglemovieComponent } from './shared/components/singlemovie/singlemovie.component';
import { AuthGaurdGuard } from './shared/service/auth-gaurd.guard';

const routes: Routes = [
  
  {
    path:'', component:LoginComponent,
  },
  {
    path:'', redirectTo: 'login', pathMatch:'full',
  },
  {
    path:'home', component:HomeComponent, 
  },
  {
    path:':movie', component:MoviecardComponent
  },
  {
    path:'movie/:id', canActivate: [AuthGaurdGuard], component:SinglemovieComponent
   },
  {
    path:'page-not-found', component:PageNotFoundComponent
  },
  {
    path:'**' , redirectTo:'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
