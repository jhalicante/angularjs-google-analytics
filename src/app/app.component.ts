import { Component } from '@angular/core';
import {Router, NavigationEnd} from "@angular/router";
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <h1 style="text-align:center;">
      <h1>
        Welcome to {{title}}!!
      </h1>
      <button (click)= 'sendEvent()'>Send Events to GA</button>
      <router-outlet></router-outlet>
    </h1>
  `,
  styles: []
})
export class AppComponent {
  title = 'AngularJS Google Analytics';
  constructor(
    private router: Router,
    private titleService : Title) {

     this.router.events.subscribe(event => {

      console.log(event);
      

      console.log('router subscribe event');
      
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  sendEvent = () => {
    (<any>window).ga('send', 'event', {
      eventCategory: 'eventCategoryssss',
      eventLabel: 'eventLabelsssss',
      eventAction: 'eventAction',
      eventValue: 10
    });
  }
}
