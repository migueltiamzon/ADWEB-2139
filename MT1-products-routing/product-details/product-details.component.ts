import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor() { }
  prod : any[] = [
    {"id": 1, "name": "SHL0001"},
    {"id": 2, "name": "SHL0002"},
    {"id": 3, "name": "SHL0003"},
    {"id": 4, "name": "SHL0004"},
    {"id": 3, "name": "SHL0005"},
    {"id": 3, "name": "SHL0006"},
  ];
    trackByData (index:number, studArr:any): number
    {
      return studArr.id;
    }    
    prod1 : any[] = [
      {"id": 1, "name": "TSHIRT"},
      {"id": 2, "name": "SHOES"},
      {"id": 3, "name": "HANDBAGS"},
      {"id": 4, "name": "JOGGING PANTS"},
      {"id": 5, "name": "FACESHIELDS"},
      {"id": 6, "name": "MUGS"},
    ];
      trackByData1 (index:number, studArr:any): number
      {
        return studArr.id;
      }    
      prod2 : any[] = [
        {"id": 1, "name": "Comfortable, casual and loose fitting, our heavyweight dark color t-shirt will quickly become one of your favorites."},
        {"id": 2, "name": "Unstructured fabric shoulder bag that can either be worn parallel to your body, or across it."},
        {"id": 3, "name": "Made of 100% natural material and can be customized with your favorite pictures and text for the perfect gift or casual accessory."},
        {"id": 4, "name": "Made of fabric that allow for maximum comfort and ease."},
        {"id": 4, "name": "New and improved face shields with comfortable glasses frames for adults and kids are here."},
        {"id": 4, "name": "Commuter mugs feature a rubber-lined lid for a tight, spill-resistant seal, twist the lid to reveal the sip opening"},
      ];
        trackByData2 (index:number, studArr:any): number
        {
          return studArr.id;
        }  
  ngOnInit(): void {
  }
  
}
