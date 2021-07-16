import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlHelperService {
  getRandomId() {
    return Math.random().toString().slice(0, 6);
  }
}
