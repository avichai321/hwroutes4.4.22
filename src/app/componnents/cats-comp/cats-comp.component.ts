import { Component, OnInit } from '@angular/core';
import { CatsServiceService } from 'src/app/services/cats/cats-service.service';

@Component({
  selector: 'app-cats-comp',
  templateUrl: './cats-comp.component.html',
  styleUrls: ['./cats-comp.component.css']
})
export class CatsCompComponent implements OnInit {
  cats:any= [];
  constructor(private catserve:CatsServiceService) { 
    catserve.getCat().subscribe((factCat)=>{
      this.cats=factCat;

  });
}

  ngOnInit(): void {
  }

}
