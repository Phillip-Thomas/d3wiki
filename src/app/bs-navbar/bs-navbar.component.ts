// import { ShoppingCart } from '../shared/models/shopping-cart';
// import { ShoppingCartService } from '../shared/services/shopping-cart.service';
// import { AppUser } from '../shared/models/app-user';
// import { AuthService } from '../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  // appUser: AppUser;
  // cart$: Observable<ShoppingCart>;

  // constructor(private auth: AuthService, private shoppingCartService: ShoppingCartService) { 
  // }
  constructor(public auth: AuthService) {
  }

  async ngOnInit() { 
    // this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
    // this.cart$ = await this.shoppingCartService.getCart();
  }

  logout() {
    this.auth.logout();
  }

}
