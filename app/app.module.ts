/* import libraries */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
/* import custom modules */
import { AppRoutingModule } from './app-routing.module';
/* import components */
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuildTableComponent } from './build-table/build-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildTableComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    Location,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
