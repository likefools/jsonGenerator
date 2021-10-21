import { productList } from 'src/products';
import { Component } from '@angular/core';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
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
