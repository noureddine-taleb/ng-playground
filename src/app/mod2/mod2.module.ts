import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { PlatComponent } from './plat/plat.component';
import { RouterModule } from '@angular/router';
import { InjectService } from '../services/inject.service';
import { INJ_TOKEN, MyInjector } from '../app.module';

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
  providers: [
    {provide: INJ_TOKEN, useFactory: () => new MyInjector('mod2 instance')},
    {provide: 'hello', useValue: "congrats boy !!"}
  ]
  // bootstrap: [PlatComponent]
})
export class Mod2Module { }
