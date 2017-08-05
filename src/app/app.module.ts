import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
//// Firebase Config Lives here
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //// imports firebase/app needed for everything
    AngularFireModule.initializeApp(environment.firebase,"forloop-uyo"),
    // // imports firebase/database, only needed for database features
    AngularFireDatabaseModule,
    // imports firebase/auth, only needed for auth features
    AngularFireAuthModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
