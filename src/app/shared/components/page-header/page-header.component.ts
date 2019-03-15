import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('page-title') pageTitle;
  // tslint:disable-next-line:no-input-rename
  @Input('button-class') buttonClass;
  // tslint:disable-next-line:no-input-rename
  @Input('button-text') buttonText;
  // tslint:disable-next-line:no-input-rename
  @Input('button-link') buttonLink;

  constructor() { }

  ngOnInit() {
  }

  public get showButton(): boolean {
    return this.buttonText != null;
  }
}
