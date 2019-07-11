import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from 'src/app/management/cast/view/view.component';

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
