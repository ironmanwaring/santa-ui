import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GroupComponent } from './group/group.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupCardComponent } from './group-card/group-card.component';
import { GroupMembersPipe } from './group-card/group-members.pipe';
import { CallbackComponent } from './callback/callback.component';
import { GroupDetailsComponent } from './group-details/group-details.component';
import { AuthService } from './auth/auth.service';
import { CreateOrJoinComponent } from './create-or-join/create-or-join.component';
import { UserNamePipe } from './header/user-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GroupComponent,
    GroupsComponent,
    GroupCardComponent,
    CallbackComponent,
    GroupDetailsComponent,
    GroupMembersPipe,
    UserNamePipe,
    CreateOrJoinComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
