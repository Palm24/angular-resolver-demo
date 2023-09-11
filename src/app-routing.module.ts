import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ResolveFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const heroResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  return route.paramMap.get('id')!;
};

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'Home',
        component: HomeComponent,
      },
      {
        path: 'About/:id',
        component: AboutComponent,
        resolve: { data: heroResolver },
      },
    ],
  },
  // {
  //   path: '',
  //   component: HomeComponent,
  // },
  // {
  //   path: 'About',
  //   component: AboutComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
