import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { mainListRout } from './main-List/main-List.Rout';
import { EditComponent } from './edit/edit.component';
// import { NewProductComponent } from './new-product/new-product.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    mainListRout,
    // NewProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot([
      { path: '', component: mainListRout },
      { path: 'edit/:index', component: EditComponent },
      // { path: 'new', component: NewProductComponent },
      // { path: 'edit', component: EditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
