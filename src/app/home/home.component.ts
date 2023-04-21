import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
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
