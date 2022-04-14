import { Component, OnInit } from '@angular/core';
import { DogsServiceService } from 'src/app/services/dogs/dogs-service.service';

@Component({
  selector: 'app-dogs-comp',
  templateUrl: './dogs-comp.component.html',
  styleUrls: ['./dogs-comp.component.css']
})
export class DogsCompComponent implements OnInit {
  dog:any={};
  isSubmited:boolean =false;

  constructor(private dogserv: DogsServiceService) {
    dogserv.getdogs().subscribe((impDog)=> {
      this.dog=impDog;
    })
   }

  ngOnInit(): void {
  }
  showPic(){
    this.isSubmited= !this.isSubmited;
  }
}
