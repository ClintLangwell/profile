import { UserProfile } from './../interfaces/user-profile';
import { ProfileService } from './../profile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userProfile: UserProfile = null;
  constructor(private service: ProfileService) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
}
