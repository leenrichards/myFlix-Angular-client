import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  /**---- Go to movies page -----------*/

  goToMovies(): void {
    this.router.navigate(['movies']);
  }

  /**---- Go to profile page -----------*/
  goToProfile(): void {
    this.router.navigate(['profile']);
  }

  /**---- Log out user -----------*/
  logOut(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
  }

}
