import { Component, Inject } from '@angular/core';
import { INJ_TOKEN, MyInjector } from './app.module';
import { InjectService } from './services/inject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ng-playground';

  constructor(
    @Inject(InjectService) public inj: any, 
    @Inject(INJ_TOKEN) public myToken: MyInjector,
  )
  {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInt' to the class.
  }
}
