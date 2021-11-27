import { Component, OnInit } from '@angular/core';
import { InjectService } from 'src/app/services/inject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {

  constructor(public inj: InjectService) { }

  ngOnInit(): void {
  }

}
