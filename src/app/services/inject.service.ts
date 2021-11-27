import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { Mod2Module } from '../mod2/mod2.module';

@Injectable({
  providedIn: null
})
export class InjectService {
  private c = 0;

  constructor() { 
    console.log("new instance")
  }

  get counter() {
    return this.c;
  }

  inc() {
    this.c++;
  }
}
