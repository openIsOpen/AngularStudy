import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router'
import { HeroesComponent} from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDedailComponent } from './hero-dedail/hero-dedail.component'

const routers:Routes =[
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'herodedail/:id',component:HeroDedailComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routers)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
