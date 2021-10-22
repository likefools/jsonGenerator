import { Component, OnInit } from '@angular/core';
import { productList } from 'src/products';

@Component({
  selector: 'main-list-rout',
  templateUrl: './main-List.Rout.html',
  styleUrls: ['./main-List.Rout.css']
})
export class mainListRout {
  products = productList
}
