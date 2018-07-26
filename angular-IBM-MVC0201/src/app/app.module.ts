import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListAllEmpComponent } from './list-all-emp/list-all-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ListOneEmpComponent } from './list-one-emp/list-one-emp.component';
import { UpdateEmpInputComponent } from './update-emp-input/update-emp-input.component';
import { SelectPageComponent } from './select-page/select-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllEmpComponent,
    AddEmpComponent,
    ListOneEmpComponent,
    UpdateEmpInputComponent,
    SelectPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
