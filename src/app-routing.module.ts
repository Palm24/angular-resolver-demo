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

export const dataResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  // if paramMap = only one data
  // if queryParamMap = all data
  var data = route.queryParamMap.getAll('id');
  console.log('Router: ' + data);
  return data;
};

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'Home/:data',
        component: HomeComponent,
        resolve: { data: dataResolver },
      },
      {
        path: 'About/:data',
        component: AboutComponent,
        resolve: { data: dataResolver },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
