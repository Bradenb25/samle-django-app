import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './results/search-results/search-results.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';
import { DetailsComponent } from './details/details.component';
import { AddVideoComponent } from './add-video/add-video.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'search',
        pathMatch: 'full'
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'search-results',
        component: SearchResultsComponent
    },
    {
        path: 'video-detail/:videoClip',
        component: DetailsComponent
    },
    {
        path: 'add-video',
        component: AddVideoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
