import { Component } from '@angular/core';
import { InjectService } from './services/inject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-playground';

  constructor(public inj: InjectService)
  {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInt' to the class.
  }
}
