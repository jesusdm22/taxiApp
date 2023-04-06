import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  constructor() { }

  ngOnInit() {}

  scroll() {
    let e = document.getElementById("about");
        e.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'center'
        });
  }
}
