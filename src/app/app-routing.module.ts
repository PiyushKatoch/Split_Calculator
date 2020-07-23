import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PassbookComponent } from './passbook/passbook.component';
import { AboutComponent } from './about/about.component';
import { PlanComponent } from './plan/plan.component';



const routes: Routes = [
  {path : 'passbook', component: PassbookComponent},
  {path : 'about', component: AboutComponent},
  {path : 'plan', component: PlanComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
 }
