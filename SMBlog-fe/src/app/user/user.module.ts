import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserMainComponent } from './user-main/user-main.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ForgetPwdComponent, UserInfoComponent, UserLoginComponent, UserMainComponent, UserProfileComponent, UserRegisterComponent]
})
export class UserModule { }
