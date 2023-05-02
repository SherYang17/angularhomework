import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemlistComponent } from './itemlist/itemlist.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ItemlistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
