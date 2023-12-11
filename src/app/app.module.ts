
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu'
import { MatSidenavContainer } from '@angular/material/sidenav';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeadeComponent } from './heade/heade/heade.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ReasonComponent } from './reason/reason.component';
import { IndustryComponent } from './industry/industry.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ScreenComponent } from './screen/screen.component';
import { StickyDirective } from './sticky.directive';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    FooterComponent,
    AboutComponent,
    ReasonComponent,
    IndustryComponent,
    BenefitsComponent,
    AgendaComponent,
    ScreenComponent,
    StickyDirective,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    NgxPaginationModule,
    FontAwesomeModule,
    FormsModule,
    FontAwesomeModule
  ],
  exports: [MatSidenavContainer],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
