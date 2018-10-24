//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgexModule, Ngex } from 'ngex';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { rutasProyecto } from './app.routes';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';

//Store
import { store } from './store/store';
import { actions } from './store/actions';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    rutasProyecto,
    HttpClientModule,
    NgexModule.forRoot({store:store,actions:actions})
  ],
  providers: [Ngex],
  bootstrap: [AppComponent]
})
export class AppModule { }
