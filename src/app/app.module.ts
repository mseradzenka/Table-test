import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableModule } from './table/table.module';
import { tableReducer } from './store/reducers/table.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    StoreModule.forRoot({ table: tableReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
