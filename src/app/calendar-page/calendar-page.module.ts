import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './calendar-page.component';
import { HeaderModule } from '../common/header/header.module';



@NgModule({
  declarations: [
    CalendarPageComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
  ],
})
export class CalendarPageModule { }
