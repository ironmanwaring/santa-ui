import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AvatarComponent } from './avatar/avatar.component';

import 'hammerjs';
import { TitleComponent } from './title/title.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    RouterModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ToolbarComponent,
    AvatarComponent,
    TitleComponent,
    LoadingComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  declarations: [
    ToolbarComponent,
    AvatarComponent,
    TitleComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
