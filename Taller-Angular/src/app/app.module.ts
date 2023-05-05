import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent} from './modules/shared/components/sidebar/sidebar.component';
import { IconComponent } from './modules/shared/icon/icon.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { DashboardComponent } from './modules/shared/components/dashboard/dashboard.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { CardDriverComponent } from './components/organisms/card-driver/card-driver.component';
import { ContenedorComponent } from './components/organisms/contenedor/contenedor.component';
import { CardPercentComponent } from './components/organisms/card-percent/card-percent.component';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ClientModalComponent } from './modules/client-modal/client-modal.component';
import { AuthInterceptor } from './auth.interceptor';


@NgModule({

  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    CardDriverComponent,
    ContenedorComponent,
    CardPercentComponent,
    ClientModalComponent,
   
  ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    IconComponent,
    HttpClientModule,
   
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
