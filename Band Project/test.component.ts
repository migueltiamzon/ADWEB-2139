import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  presentDate = new Date(); 

  time = new Observable<string> ((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  price : number = 20000;

  Fruits = ["Apple", "Orange", "Grapes", "Mango", "Kiwi", "Pomegranate"];


  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;


  decimalNum3: number = 0.9;
  decimalNum4: number = 5.8;


  constructor() { }

  ngOnInit(): void {
    
  }

}
