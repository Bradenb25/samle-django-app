import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './results/search-results/search-results.component';
import { SingleResultComponent } from './results/single-result/single-result.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './shared/services/auth-interceptor.service';
import { DetailsComponent } from './details/details.component';
import { SearchHeaderComponent } from './shared/search-header/search-header.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { NgxImageEditorModule } from "ngx-image-editor";
import { GifCreatorComponent } from './gif-creator/gif-creator.component';
import { MemeCreatorComponent } from './meme-creator/meme-creator.component';
import { AdvancedSearchComponent } from './search/advanced-search/advanced-search.component';
import { MatButtonModule, MatCheckbox, MatCheckboxModule, MatInputModule } from '@angular/material';


@NgModule({ 
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    SingleResultComponent,
    DetailsComponent,
    SearchHeaderComponent,
    AddVideoComponent,
    GifCreatorComponent,
    MemeCreatorComponent,
    AdvancedSearchComponent
  ],
  imports: [
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
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
  entryComponents: [
    AdvancedSearchComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
