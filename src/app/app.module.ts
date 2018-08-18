import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { BillsComponent } from './bills/bills.component';

const appRoutes: Routes = [
  { path: 'friends', component: FriendFormComponent },
  { path: 'bills',      component: BillsComponent },
  { path: '',
    redirectTo: '/friends',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FriendFormComponent,
    BillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
