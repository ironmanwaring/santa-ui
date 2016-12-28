import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthService } from './auth.service';

import 'hammerjs';

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
  ],
  providers: [
    AuthService,
  ]
})
export class SharedModule { }
