import { BrowserModule } from '@angular/platform-browser';
import { InjectionToken, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { InjectService } from './services/inject.service';
import { Comp2Component } from './comp2/comp2.component';

export class MyInjector {
  constructor(public value: string) {
    console.log("instantiate MyInjector", value);
  }
}
// export const INJ_TOKEN = new InjectionToken<MyInjector>('inj_token');
export const INJ_TOKEN = new InjectionToken<MyInjector>('inj_token', {providedIn: 'root', factory: () => new MyInjector("I suck badly") });

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {provide: InjectService, deps: [HttpClient]}
    // {provide: INJ_TOKEN, useValue: new MyInjector('root module instance')}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
