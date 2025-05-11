import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
  openMenu:boolean=false;
  toggleMenu(){
    this.openMenu = !this.openMenu;
    
  }
}
