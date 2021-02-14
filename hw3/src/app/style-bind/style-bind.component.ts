import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-bind',
  templateUrl: './style-bind.component.html',
  styleUrls: ['./style-bind.component.css']
})
export class StyleBindComponent implements OnInit {
  myStyles= {
    color : "blue",
    background: "green",
    display: "inline"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
