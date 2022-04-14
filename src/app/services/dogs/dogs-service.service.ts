import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogsServiceService {

  constructor(private dogHttpPath: HttpClient) {}

  getdogs(){
    return this.dogHttpPath.get('https://dog.ceo/api/breeds/image/random');
  }
}
