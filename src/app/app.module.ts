import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SlideComponent } from './slide/slide.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { MenuboutonComponent } from './menubouton/menubouton.component';
import { ArticleComponent } from './article/article.component';
import { PanierComponent } from './panier/panier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SlideComponent,
    SectionComponent,
    FooterComponent,
    MenuboutonComponent,
    ArticleComponent,
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
