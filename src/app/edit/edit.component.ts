import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from 'src/products';
import { faTimes, faPlus, faCheck, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Product } from '../interfaces';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  iconDelete = faTimes
  iconAdd = faPlus
  iconSave = faCheck
  iconBack = faArrowLeft
  productList: Product[] = productList
  showNewFitFields = false

  product: Product;
  index: any;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      this.index = params.get('index');
      this.product = productList[this.index]
    });
  }

  createFit(row: HTMLInputElement[]) {
    row.forEach(cell => {
      (!cell.value) ? cell.classList.add('error') : cell.classList.remove('error')
    })
    if (!row[0].value || !row[1].value) return

    this.productList[this.index]?.fits.push({ fit: row[0].value, mkt: row[1].value })
    row[0].value = row[1].value = ""
    this.showNewFitFields = false
  }

  deleteProdcut() {
    this.productList.splice(this.index, 1)
  }

  deleteFit(index: number) {
    this.productList[this.index]?.fits.splice(index, 1)
  }
}

