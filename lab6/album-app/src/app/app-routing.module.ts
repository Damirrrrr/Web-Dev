import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPhotoComponent } from './album-photo/album-photo.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: '/home', component: HomeComponent },
{ path: '/about', component: AboutComponent },
{ path: '/albums', component: AlbumsComponent },
{ path: '/albums/:id', component: AlbumDetailComponent },
{ path: '/albums/:id/photos', component: AlbumPhotoComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
