import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  { path: '',
   component: HomeComponent
  },
  { path: 'brand/:name',
  component: BrandComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
