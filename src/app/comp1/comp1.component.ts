import { Component, OnInit } from '@angular/core';
import { InjectService } from '../services/inject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  constructor(public inj: InjectService) {
  }

  ngOnInit(): void {

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.inj.counter+=1;
  }
}
