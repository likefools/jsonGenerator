import { productList } from 'src/products';
import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList = productList
  iconEdit = faEdit


  editProdcut(i: number, el: HTMLSpanElement) {
    console.log(el.textContent)
    this.productList[i].product = (el.textContent as string)
  }

  editFit(i: number, j: number, item: string, el: HTMLTableCellElement) {
    (this.productList[i].fits[j] as any)[item] = el.textContent
  }
}
