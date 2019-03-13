import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageone',
  template: `
      <p>
        Page One is Working!
      </p>
      <a routerLink="/pagetwo">Go to Page Two</a>
    `,
  styles: []
})
export class PageoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.document.title = 'Page One';
  }

}
