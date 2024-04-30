import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userloggedin = false;


  ngOnInit(): void {
    const user = localStorage.getItem("User")

    if (user) {
      this.userloggedin = true;
    } else {
      this.userloggedin = false;
    }
  }

  logout() {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout from your account!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("User");
        Swal.fire({
          title: "Successfull!",
          text: "Your account has been logout successfully.",
          icon: "success"
        });
      }
    });
  }

}
