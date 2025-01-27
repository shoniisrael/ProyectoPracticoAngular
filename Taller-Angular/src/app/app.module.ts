import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/shared/components/sidebar/sidebar.component';
import { IconComponent } from './modules/shared/icon/icon.component';
import { LayoutComponent } from './modules/shared/layout/layout.component';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { CardDriverComponent } from './components/organisms/card-driver/card-driver.component';
import { ContenedorComponent } from './components/organisms/contenedor/contenedor.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { MainCardLayoutComponent } from '@modules/shared/main-card-layout/main-card-layout.component';
import { NotFoundComponent } from './modules/shared/components/not-found/not-found.component';
import { ModalComponent } from './components/organisms/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ContenedorComponent,
    MainCardLayoutComponent,
    NotFoundComponent,
    ModalComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarComponent,
    IconComponent,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
