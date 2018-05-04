// ng core
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// dependencies
import { MaterialModule } from './material/material.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeaderNavMenuComponent } from './components/header-nav-menu/header-nav-menu.component';
import { FunctionalMenuComponent } from './components/functional-menu/functional-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    HeaderNavMenuComponent,
    FunctionalMenuComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
