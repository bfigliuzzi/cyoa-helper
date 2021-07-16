import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  hasKey(key: string) {
    return localStorage.getItem(key) != null;
  }

  getData<T>(key: string) {
    if (!this.hasKey(key)) {
      return;
    }

    const data = localStorage.getItem(key) || "";
    return JSON.parse(data) as T;
  }

  setData(key: string, data: any) {
    const dataString = JSON.stringify(data);
    localStorage.setItem(key, dataString);
  }
}
