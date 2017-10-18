import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OnlineContactComponent } from './online-contact/online-contact.component';
import { SocialChannelComponent } from './social-channel/social-channel.component';
import { HomeComponent } from './home.component';
import { homeRoutes } from './home.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [OnlineContactComponent, SocialChannelComponent, HomeComponent]
})
export class HomeModule { }
