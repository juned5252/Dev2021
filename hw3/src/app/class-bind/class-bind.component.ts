import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  templateUrl: './class-bind.component.html',
  styleUrls: ['./class-bind.component.css']
})
export class ClassBindComponent implements OnInit {
  

  successVar = 'success'
  warningVar = 'warning'
  isDanger: Boolean = true

  myclasses = {
    "success" : !this.isDanger,
    "recomend" : this.isDanger,
    "special" :  this.isDanger
  }
  constructor() { }

  ngOnInit(): void {
  }


}
