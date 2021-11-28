import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { Mod2Module } from '../mod2/mod2.module';

// @Injectable({
//   providedIn: 'root'
// })
export class InjectService {
  private c = 0;

  constructor(private http: HttpClient) { 
  }

  get counter() {
    return this.c;
  }

  inc() {
    this.c++;
  }
}
