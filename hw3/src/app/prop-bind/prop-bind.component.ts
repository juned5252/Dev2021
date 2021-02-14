import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-bind',
  templateUrl: './prop-bind.component.html',
  styleUrls: ['./prop-bind.component.css']
})
export class PropBindComponent implements OnInit {

  someValue = 'cat';
  disabled1 = false;
  disabled2 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
