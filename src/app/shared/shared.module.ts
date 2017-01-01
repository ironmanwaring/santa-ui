import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './auth/auth.service';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AvatarComponent } from './avatar/avatar.component';

import 'hammerjs';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
  ],
  exports: [
    MaterialModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    ToolbarComponent,
    AvatarComponent,
    TitleComponent
  ],
  providers: [
    AuthService,
  ],
  declarations: [
    ToolbarComponent,
    AvatarComponent,
    TitleComponent
  ]
})
export class SharedModule { }
