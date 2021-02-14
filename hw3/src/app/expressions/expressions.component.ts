import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expressions',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.css']
})
export class ExpressionsComponent implements OnInit {
  public Concat = "Concatnation"
  constructor() { }

  ngOnInit(): void {
  }

}
