import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

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
