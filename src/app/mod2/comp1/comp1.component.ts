import { Component, Inject, Injector, OnInit } from '@angular/core';
import { INJ_TOKEN, MyInjector } from 'src/app/app.module';
import { InjectService } from 'src/app/services/inject.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.sass']
})
export class Comp1Component implements OnInit {
  i = 0;
  start = Date.now();
  called = false;

  constructor(
    public inj: InjectService, 
    @Inject(INJ_TOKEN) public myToken: MyInjector,
    private injector: Injector
    )
  {
  }

  ngOnInit(): void {
    console.log("resolving 'hello' = ", this.injector.get("hello"))
  }

  inc() {
    this.inj.inc();
    if (!this.called) {
      console.log("calling heavy work")
      this.called = true;
      this.start = Date.now();
      this.count()
    }
  }

  count() {
    // do a piece of the heavy job (*)
    do {
      this.i++;
    } while (this.i % 1e6 != 0);

    if (this.i == 1e9) {
      alert("Done in " + (Date.now() - this.start) + 'ms');
    } else {
      setTimeout(this.count.bind(this)); // schedule the new call (**)
    }
  }

}
