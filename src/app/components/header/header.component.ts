import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  activehash: string ='';
  isMenuOpen = false;


  @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   const sections = document.querySelectorAll('section'); // Get all sections
  //   let scrollPos = window.scrollY + 100; // Offset to detect active section

  //   sections.forEach((section) => {
  //     const id = section.getAttribute('id');
  //     const offset = section.offsetTop;
  //     const height = section.offsetHeight;
      
  //     if (scrollPos >= offset && scrollPos < offset + height) {
  //       console.log(id)
  //       this.activehash = '#'+id || '#home'; // Update active section
  //     }
  //   });
  // }
  cartCount = 0;
  clicked: boolean = false;
  constructor(private router:Router,private cartService: CartService,private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
      // this.router.events.subscribe(event =>{
      //   if (event instanceof NavigationEnd){
      //     this.activehash = window.location.hash ||'#home'
      //   }
      // })
      this.cartService.cartCount$.subscribe(count => {
        this.cartCount = count; // Update cart count
        console.log(this.cartCount)
      });
      
  }
  cartDetails(){
    this.router.navigate(['/cart-details'])
  }

  
  ngAfterViewInit(){
    this.route.fragment.subscribe((fragment =>{
      if (fragment){
        this.activehash = fragment
        document.getElementById(fragment)?.scrollIntoView({behavior:'smooth', block: 'start'})
      }
      else{
        this.activehash = '#home'
      }
    }))
  }
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const navMenu = document.getElementById('navmenu');
    if (navMenu) {
      console.log(this.isMenuOpen)
      if (this.isMenuOpen) {
        navMenu.classList.add('open');
      } else {
        navMenu.classList.remove('open');
      }
    }
  }
  
}
