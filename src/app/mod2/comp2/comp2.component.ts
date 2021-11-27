import { Component, OnInit } from '@angular/core';
import { InjectService } from 'src/app/services/inject.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.sass']
})
export class Comp2Component implements OnInit {

  constructor(public inj: InjectService) { }

  ngOnInit(): void {
  }

}
