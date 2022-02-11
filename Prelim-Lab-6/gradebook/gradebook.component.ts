import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //ngIf Statement
  isLogIn:boolean=false;
  isLogOut:boolean=true;

  //ngFor Statement
  list = [1,2,3,4,5];

  //ngFor Statement using TrackBy
  studentArr : any[] = [
    {"id": 1, "name": "student1"},
    {"id": 2, "name": "student2"},
    {"id": 3, "name": "student3"},
    {"id": 4, "name": "student4"}
  ];
    trackByData (index:number, studArr:any): number
    {
      return studArr.id;
    }    

    //ngFor Statement (Angular - Display a list items)
    staff = [
      { firstname: "Gian", lastname: "Villanueva", email: "gian.villanueva@dog.com", role: "user"},
      { firstname: "Bhen", lastname: "Galang", email: "bhen.galang@dog.com", role: "user"},
      { firstname: "Paulo", lastname: "Siongco", email: "paulo.siongco@dog.com", role: "admin"},
      { firstname: "Nicole", lastname: "Yap", email: "nicole.yap@dog.com", role: "user"},
      { firstname: "Ardel", lastname: "Salazar", email: "ardel.salazar@dog.com", role: "admin"}
    ];

    //Switch Statement
    logInName = "admin";
    
  constructor() { }

  ngOnInit(): void {
  }

}