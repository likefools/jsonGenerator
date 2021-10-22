import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClipboardModule } from 'ngx-clipboard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { mainListRout } from './main-List/main-List.Rout';
import { EditComponent } from './edit/edit.component';
import { NewProductComponent } from './new-product/new-product.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    mainListRout,
    NewProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    ClipboardModule,
    RouterModule.forRoot([
      { path: '', component: mainListRout },
      { path: 'edit/:index', component: EditComponent },
      { path: 'new', component: NewProductComponent },
      // { path: 'edit', component: EditComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
