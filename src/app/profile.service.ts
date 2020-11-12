import { UserProfile } from './interfaces/user-profile';
import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Clint',
    contact: '248-248-2480',
    bio: 'I am loving angular!',
  };
  constructor(private router: Router) {}

  getUserProfile = (): UserProfile => {
    return this.userProfile;
  };

  setUserProfile = (profile: UserProfile): void => {
    this.userProfile = profile;
  };
}
