import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { WorkPageComponent } from './pages/home/work-page/work-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogPageComponent } from './pages/home/blog-page/blog-page.component';
import { BlogDetailPageComponent } from './pages/home/blog-detail-page/blog-detail-page.component';
import { WorkDetailPageComponent } from './pages/home/work-detail-page/work-detail-page.component';
import { DashboardPageComponent } from './pages/admin/dashboard-page/dashboard-page.component';
import { BlogPostComponent } from './pages/admin/blog-post/blog-post.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { WorkPostComponent } from './pages/admin/work-post/work-post.component';
import { BlogAddComponent } from './pages/admin/blog-add/blog-add.component';
import { WorkaddComponent } from './pages/admin/workadd/workadd.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UploaderModule } from "angular-uploader";
import { AngularFileUploaderModule } from "angular-file-uploader";
import { ContactComponent } from './pages/home/contact/contact.component';
import { ContactpageComponent } from './pages/admin/contactpage/contactpage.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';




registerLocaleData(en);



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    WorkPageComponent,
    HeaderComponent,
    FooterComponent,
    BlogPageComponent,
    BlogDetailPageComponent,
    WorkDetailPageComponent,
    DashboardPageComponent,
    BlogPostComponent,
    WorkPostComponent,
    BlogAddComponent,
    WorkaddComponent,
    ContactComponent,
    ContactpageComponent,
    SigninComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzSkeletonModule,
    NzButtonModule,
    NzMenuModule,
    NzTableModule,
    NzFormModule,
    NgxEditorModule,
    AngularEditorModule,
    UploaderModule,
    AngularFileUploaderModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
