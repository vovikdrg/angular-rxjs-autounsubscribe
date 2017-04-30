import { BaseComponent } from 'app/base-component';
import { Subscription } from 'rxjs/Subscription';
import { UnsubscribePage } from './../../e2e/app.po';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showComponent = true;

  title = 'app works!';
}
