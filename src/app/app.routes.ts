import {Routes} from '@angular/router';
import {ListComponent} from "@products/pages/list/list.component";
import {NotFoundComponent} from "./domains/info/pages/not-found/not-found.component";
import {AboutComponent} from "./domains/info/pages/about/about.component";
import {LayoutComponent} from "@shared/components/layout/layout.component";

export const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }

];
