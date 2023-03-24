import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SidebarComponent} from './modules/shared/components/sidebar/sidebar.component';
import { IconComponent } from './modules/shared/icon/icon.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { CardDriverComponent } from './components/organisms/card-driver/card-driver.component';
import { ContenedorComponent } from './components/organisms/contenedor/contenedor.component';
import { CardPercentComponent } from './components/organisms/card-percent/card-percent.component';

import {HttpClientModule} from '@angular/common/http';
import { ComCComponent } from './com-c/com-c.component';


@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    CardDriverComponent,
    ContenedorComponent,
    CardPercentComponent,
    ComCComponent,
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    IconComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
