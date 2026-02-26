import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userloggedin = false;
  isMenuOpen = false;
  isScrolled = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.checkLoginState();

    // Re-check login state on every navigation
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkLoginState();
        this.closeMenu();
      }
    });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  checkLoginState() {
    const user = localStorage.getItem('User');
    this.userloggedin = !!user;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  logout() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to logout from your account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f59e0b',
      cancelButtonColor: '#64748b',
      confirmButtonText: 'Yes, Logout!'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('User');
        this.userloggedin = false;
        this.router.navigate(['/home']);
        Swal.fire({
          title: 'Logged Out!',
          text: 'You have been logged out successfully.',
          icon: 'success',
          confirmButtonColor: '#f59e0b'
        });
      }
    });
  }
}
