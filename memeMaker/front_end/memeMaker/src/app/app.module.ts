import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './results/search-results/search-results.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { SingleResultComponent } from './results/single-result/single-result.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { DetailsComponent } from './details/details.component';
import { SearchHeaderComponent } from './shared/search-header/search-header.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { NgxImageEditorModule } from "ngx-image-editor";

@NgModule({ 
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    VideoDetailComponent,
    SingleResultComponent,
    DetailsComponent,
    SearchHeaderComponent,
    AddVideoComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxImageEditorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
