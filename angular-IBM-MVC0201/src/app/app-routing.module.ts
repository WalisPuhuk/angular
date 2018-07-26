import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPageComponent } from './select-page/select-page.component';
import { ListAllEmpComponent } from './list-all-emp/list-all-emp.component';
import { ListOneEmpComponent } from './list-one-emp/list-one-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpInputComponent } from './update-emp-input/update-emp-input.component';

const routes: Routes = [
  { path: '', redirectTo: '/selectPage', pathMatch: 'full' },
  { path: 'selectPage', component: SelectPageComponent },
  { path: 'listAllEmp', component: ListAllEmpComponent },
  { path: 'listOneEmp/:empno', component: ListOneEmpComponent },
  { path: 'addEmp', component: AddEmpComponent },
  { path: 'updateEmpInput/:empno', component: UpdateEmpInputComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
