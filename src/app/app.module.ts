import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FriendFormComponent } from './friend-form/friend-form.component';
import { BillsComponent } from './bills/bills.component';
import { BalanceSummaryComponent } from './balance-summary/balance-summary.component';

const appRoutes: Routes = [
  { path: 'friends', component: FriendFormComponent },
  { path: 'bills', component: BillsComponent },
  { path: 'balance-summary', component: BalanceSummaryComponent },
  { path: '',
    redirectTo: '/friends',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    FriendFormComponent,
    BillsComponent,
    BalanceSummaryComponent
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
