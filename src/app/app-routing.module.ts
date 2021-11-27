import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { PlatComponent } from './mod2/plat/plat.component';

const routes: Routes = [
  {
    path: "1",
    component: Comp1Component
  },
  {
    path: "2",
    component: Comp2Component
  },
  {
    path: "mod2",
    component: PlatComponent,
    loadChildren: () => import("./mod2/mod2.module").then(m => m.Mod2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
