import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatListModule, MatCheckboxModule, MatCardModule, MatToolbarModule, MatTabsModule,
  MatButtonToggleModule, MatExpansionModule, MatFormFieldModule, MatDatepickerModule,
  MatNativeDateModule, MatSlideToggleModule, MatSortModule, MatIconModule, MatSidenavModule,
  MatButtonModule, MatInputModule, MatSelectModule
} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MatSortModule, MatCheckboxModule, MatSlideToggleModule, MatCardModule, MatNativeDateModule,
    MatListModule, MatButtonModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,
    MatIconModule, MatToolbarModule, MatTabsModule, MatSidenavModule, MatButtonToggleModule, MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
