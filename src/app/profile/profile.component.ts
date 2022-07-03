import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';



import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog,
    public router: Router,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Gets user data from api call and sets the user variable to returned JSON file
   * @returns object holding user information
   * @function getUser
   */
  getUser(): void {
    this.fetchApiData.getUserProfile().subscribe((resp: any) => {
      this.user = resp;
      this.user.Birthday = new Date(this.user.Birthday).toLocaleDateString(),
        console.log("here", this.user.Birthday);
      console.log(this.user);
      return this.user;
    })
  }

  /**
   * allows user to edit their data, such as Username, password, email, and birthday
   */
  editUser(): void {
    console.log(this.user);
    this.fetchApiData.editUserProfile(this.user).subscribe((result) => {
      //this.dialogRef.close();
      console.log(result);
      this.snackBar.open('Successfully updated profile!', 'OK', {
        duration: 2000
      });

    })
  }

  /**---- Go to movies page -----------*/
  goToMovies(): void {
    this.router.navigate(['movies']);
  }




}