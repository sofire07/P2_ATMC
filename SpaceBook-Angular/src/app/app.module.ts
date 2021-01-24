//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//services
import { HeroimageService } from '../app/services/heroimage.service';

//components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DirectMessagingComponent } from './components/direct-messaging/direct-messaging.component';
import { PictureDetailComponent } from "./components/picture/picture-detail/picture-detail.component";
import { UploadPictureComponent } from "./components/picture/upload-picture/upload-picture.component";
import { LogInComponent } from './components/user/log-in/log-in.component';
import { HeroImageComponent } from './components/hero-image/hero-image.component';

/* Bootstrap Modules */
import { NgbModule, NgbRating } from '@ng-bootstrap/ng-bootstrap';

/*REVIEW*/
import { MultiImageDisplayComponent } from './multi-image-display/multi-image-display.component';

/*
// import { FollowingComponent } from './following/following.component';
import { DmButtonComponent } from './dm-button/dm-button.component';
import { FollowingComponent } from './components/following/following.component';
import { DmButtonComponent } from './components/dm-button/dm-button.component';
*/

import { UsernameComponent } from './username/username.component';
/*REVIEW*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 /* Material Design Modules */
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { PictureComponent } from './components/picture/picture.component';
import { FollowingComponent } from './components/user/following/following.component';
import { ProfileComponent } from './components/user/profile/profile.component';

 
@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    DashboardComponent,

    UploadPictureComponent,
    PictureDetailComponent,
    DirectMessagingComponent,
    LogInComponent,
    PictureComponent,
    FollowingComponent,
    ProfileComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [NgbRating],
  providers: [HeroimageService],
  bootstrap: [AppComponent, NgbRating]
})
export class AppModule { }