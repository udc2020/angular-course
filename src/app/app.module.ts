import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HelloUdc } from './hello/hello.component'; 
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { ButtonComponent } from './components/button/button.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { CondComponent } from './components/cond/cond.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloUdc,
    HelloComponent,
    ButtonComponent,
    ListComponent,
    ListItemComponent,
    CondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
