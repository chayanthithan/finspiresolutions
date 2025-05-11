import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MainService } from '../../services/main.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public __main: MainService){}
  open(){
    
  }
}
