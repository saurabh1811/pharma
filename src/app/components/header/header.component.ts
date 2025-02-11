import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  clicked: boolean = false;
  activehash: string ='';
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
      this.router.events.subscribe(event =>{
        if (event instanceof NavigationEnd){
          this.activehash = window.location.hash ||'#home'
        }
      })
  }
  
}
