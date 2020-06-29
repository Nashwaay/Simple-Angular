import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewcardComponent } from './viewcard/viewcard.component';
import { EditcardComponent } from './editcard/editcard.component';


const routes: Routes = [
  { path: '',  component: AppComponent },
  { path: 'view/:id',  component: ViewcardComponent },
  { path: 'edit/:id',  component: EditcardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
