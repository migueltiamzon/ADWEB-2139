import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {
  fetchEmp!: any[];

  constructor( private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.fetchEmp = this.myservice.listEmp();
  }

}
