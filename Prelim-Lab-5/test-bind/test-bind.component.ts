import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bind',
  templateUrl: './test-bind.component.html',
  styleUrls: ['./test-bind.component.css']
})
export class TestBindComponent implements OnInit {

  studName1 = " ";
  studNum1 = " ";
  prelim1 = 0;
  midterm1 = 0;
  final1 = 0;

  constructor() { }

  ngOnInit(): void {
  }

}