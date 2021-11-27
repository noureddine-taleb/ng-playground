import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { PlatComponent } from './plat/plat.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [Comp1Component, Comp2Component, PlatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "1",
        component: Comp1Component
      },
      {
        path: "2",
        component: Comp2Component
      },
    ])
  ],
  // bootstrap: [PlatComponent]
})
export class Mod2Module { }
