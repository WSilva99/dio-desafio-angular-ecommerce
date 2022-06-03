import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { HomeStoreComponent } from './home-store/home-store.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { HiglightsComponent } from './shared/components/higlights/higlights.component';
import { ProductsService } from './services/products.service';
import { ProductHorizontalCardComponent } from './shared/components/product-horizontal-card/product-horizontal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    HomeStoreComponent,
    ProductCardComponent,
    HiglightsComponent,
    ProductHorizontalCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
