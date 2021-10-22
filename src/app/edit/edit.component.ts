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
  index: number = -1;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(p => {
      this.index = (p.get('index') as any);
      this.product = productList[this.index]
    });
    this.product = productList[this.index] //
  }

  createFit(row: HTMLInputElement[]) {
    const fit = row[0].value
    const mkt = row[1].value
    if (!fit) return row[0].style.border = "1px solid red"
    if (!mkt) return row[1].style.border = "1px solid red"

    this.productList[this.index]?.fits.push({ fit: fit, mkt: mkt })
    row[0].value = ""
    row[1].value = ""
    return this.showNewFitFields = false
  }

  deleteProdcut() {
    this.productList.splice(this.index, 1)
  }

  deleteFit(index: number) {
    this.productList[this.index]?.fits.splice(index, 1)
  }
}

