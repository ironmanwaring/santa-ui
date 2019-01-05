import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { GroupComponent } from './group/group.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { GroupMembersPipe } from './group-card/group-members.pipe';
import { CallbackComponent } from './callback/callback.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProfileComponent,
    GroupComponent,
    GroupsComponent,
    GroupCardComponent,
    CallbackComponent,
    GroupMembersPipe
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [CookieService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
