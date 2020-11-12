import { UserProfile } from './../interfaces/user-profile';
import { ProfileService } from './../profile.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userProfile: UserProfile = null;
  // @Output() submitted = new EventEmitter<UserProfile>();
  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }

  setUserProfile = (form: NgForm): void => {
    this.service.setUserProfile(form.value);
    this.router.navigate(['/profile']);
  };
}
