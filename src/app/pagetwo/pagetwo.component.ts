import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagetwo',
  template: `
    <p>
      Page Two is Working!
    </p>
    <a routerLink="/pageone">Go to Page One</a>
  `,
  styles: []
})
export class PagetwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'Page Two';
  }

}
