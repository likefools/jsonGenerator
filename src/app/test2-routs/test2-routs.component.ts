import { Component, OnInit } from '@angular/core';
import { productList } from 'src/products';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-test2-routs',
  templateUrl: './test2-routs.component.html',
  styleUrls: ['./test2-routs.component.css']
})
export class Test2RoutsComponent {
  products = productList
  iconEdit = faEdit

  edit(product: any) {
    
  }
}
