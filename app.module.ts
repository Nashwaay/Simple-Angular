import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToycardComponent } from './toycard/toycard.component';
import { EditCardComponent } from './edit-card/edit-card.component';
import { EditcardComponent } from './editcard/editcard.component';
import { ViewcardComponent } from './viewcard/viewcard.component';
import { ToyCardComponent } from './toy-card/toy-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    SidebarComponent,
    ToycardComponent,
    EditCardComponent,
    EditcardComponent,
    ViewcardComponent,
    ToyCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
