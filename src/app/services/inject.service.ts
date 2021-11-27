import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
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
