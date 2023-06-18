import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';

const routes: Routes = [
  { path: '', component: WelcomePageComponent },
  { path: 'calendar-page', component: CalendarPageComponent },
  { path: 'header-page', component: HeaderComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
