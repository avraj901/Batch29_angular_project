import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { UserformComponent } from './components/userform/userform.component';

const routes: Routes = [{path:'userform',component:UserformComponent},
{path:'aboutus', component:AboutusComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
