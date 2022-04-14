import { Component, OnInit } from '@angular/core';
import { FreeapiServiceService } from 'src/app/services/freeapi/freeapi-service.service';

@Component({
  selector: 'app-freeapi-comp',
  templateUrl: './freeapi-comp.component.html',
  styleUrls: ['./freeapi-comp.component.css']
})
export class FreeapiCompComponent implements OnInit {
pic: any= {};
  constructor(freeapiserve: FreeapiServiceService) { 
    freeapiserve.getpic().subscribe((pics)=> {
      this.pic=pics; 
    })
  }

  ngOnInit(): void {
  }

}
