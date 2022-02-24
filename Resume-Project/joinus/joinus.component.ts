import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joinus',
  templateUrl: './joinus.component.html',
  styleUrls: ['./joinus.component.css']
})
export class JoinusComponent implements OnInit {

  firstName = " ";
  lastName = " ";
  email = " ";
  acad = " ";
  sample = " ";

  ngOnInit(): void {    
  }

}
