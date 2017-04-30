import { BaseComponent } from 'app/base-component';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-auto-unsubscribe',
  templateUrl: './auto-unsubscribe.component.html',
  styleUrls: ['./auto-unsubscribe.component.css']
})
export class AutoUnsubscribeComponent extends BaseComponent implements OnInit {
  ngOnInit(): void {
    Observable.interval(100)
      .safeSubscribe(this, (i) => console.log("Call without unsubscribe"))
  }
}
