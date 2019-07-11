import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './pages/manager/manager.component';


const routes: Routes = [
  {
    path: '',
    loadChildren: './+login/login.module#LoginModule',
    data: {
      customLayout: true,
      title: 'Login'
    },
  },
  {
    path: 'manager',
    component: ManagerComponent,
    data: {
      customLayout: true
    }
  },
  {
    path: 'management',
    loadChildren: './management/management.module#ManagementModule',
    data: {
      customLayout: true
    },
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
