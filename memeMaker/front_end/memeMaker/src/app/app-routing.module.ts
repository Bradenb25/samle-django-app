import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './results/search-results/search-results.component';
import { VideoDetailComponent } from './video-detail/video-detail.component';

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
        path: 'video-detail',
        component: VideoDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
