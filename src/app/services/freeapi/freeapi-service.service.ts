import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FreeapiServiceService {

  constructor(private freeapiHttpPath: HttpClient) { }

  getpic(){
    return this.freeapiHttpPath.get('https://randomfox.ca/floof/?ref=apilist.fun');
  }
}
