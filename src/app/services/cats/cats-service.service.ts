import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatsServiceService {

  constructor(private catHttpPath: HttpClient) { }

  getCat(){
    return this.catHttpPath.get('https://cat-fact.herokuapp.com/facts');
  }
}
