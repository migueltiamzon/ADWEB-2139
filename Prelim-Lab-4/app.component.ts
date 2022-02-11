import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ngdemo-1';

  //String/Number Binding
  name = "Ralph Miguel";
  age = 21;

  //Property Binding
  studentName:string = "Ralph";

  //Style Binding
  myColor = "red";

  //Class Binding
  appliedCSSClass = "green";
  notappliedCSSClass = false;

  getData(data:any){
    console.warn(data);
  }

  showData($event: any){
    console.log("button is clicked"); if($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}