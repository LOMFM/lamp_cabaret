import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    data: {
      customLayout: true
    }
  },
  {
    path: 'new',
    component: EditComponent,
    data: {
      customLayout: true
    }
  },
  {
    path: 'read/:id',
    component: EditComponent,
    data: {
      customLayout: true
    }
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    data: {
      customLayout: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CastRoutingModule { }
