import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { DataService } from './services/data.service';
import { UserlistComponent } from './components/userlist/userlist.component';
import { UserdetailComponent } from './components/userdetail/userdetail.component';
import { CallersComponent } from './components/callers/callers.component';

import { AuthGuard } from '../app/auth.guard';

const appRoutes: Routes = [
  {path: '', component: SidebarComponent},
  {path: 'userlist', component: UserlistComponent},
  {path: 'callers', component: CallersComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserlistComponent,
    UserdetailComponent,
    CallersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
