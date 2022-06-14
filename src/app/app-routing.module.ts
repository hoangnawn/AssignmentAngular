import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogAddComponent } from './pages/admin/blog-add/blog-add.component';
import { BlogPostComponent } from './pages/admin/blog-post/blog-post.component';
import { ContactpageComponent } from './pages/admin/contactpage/contactpage.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { WorkPostComponent } from './pages/admin/work-post/work-post.component';
import { WorkaddComponent } from './pages/admin/workadd/workadd.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { BlogDetailPageComponent } from './pages/home/blog-detail-page/blog-detail-page.component';
import { BlogPageComponent } from './pages/home/blog-page/blog-page.component';
import { ContactComponent } from './pages/home/contact/contact.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { WorkDetailPageComponent } from './pages/home/work-detail-page/work-detail-page.component';
import { WorkPageComponent } from './pages/home/work-page/work-page.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {path:'', component: HomePageComponent, pathMatch:'full'},
  {path:'work', component: WorkPageComponent},
  {path:'work/:id', component: WorkDetailPageComponent},
  {path:'blog', component: BlogPageComponent},
  {path:'blog/:id', component: BlogDetailPageComponent},
  {path:'contact', component: ContactComponent},
  {path:'admin', component: DashboardPageComponent,canActivate:[AuthGuard],
    children:[
      {path:'blog',component: BlogPostComponent},
      {path:'blog/add',component:BlogAddComponent},
      {path:'blog/edit/:id',component:BlogAddComponent},
      {path:'work',component: WorkPostComponent},
      {path:'work/add',component:WorkaddComponent},
      {path:'work/edit/:id',component:WorkaddComponent},
      {path:'contact',component: ContactpageComponent},
    ]
  },
  {path:'signup', component: SignupComponent},
  {path:'login', component: SigninComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
