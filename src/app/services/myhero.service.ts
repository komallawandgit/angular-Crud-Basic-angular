import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyheroService {

  constructor() { }
  showTodayDate() {
    let ndate = new Date();
    return ndate;
 }
}
