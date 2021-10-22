import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from 'src/products';
import { faTimes, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  iconDelete = faTimes
  iconAdd = faPlus
  iconSave = faCheck
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

  updateProduct(el: HTMLInputElement, saveIcon: HTMLDivElement) {
    if (!el.value) return el.style.border = "1px solid red"
    this.productList[this.index].product = el.value
    return saveIcon.style.display = "none"
  }

  updateFit(newDetails: HTMLInputElement[], icon: HTMLTableCellElement, j: number) {
    const fit = newDetails[0].value;
    const mkt = newDetails[1].value;

    if (!fit) return newDetails[0].style.border = "1px solid red"
    if (!mkt) return newDetails[1].style.border = "1px solid red"

    Object.assign(this.productList[this.index].fits[j], { fit, mkt })
    return icon.style.display = "none"
  }

  createFit(row: HTMLInputElement[]) {
    if (!row[0].value) return row[0].style.border = "1px solid red"
    if (!row[1].value) return row[1].style.border = "1px solid red"
    this.productList[this.index]?.fits.push({ fit: row[0].value, mkt: row[1].value })
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

  showSaveIcon(el: HTMLElement) {
    el.style.display = 'block'
  }
}

interface Product {
  product: string,
  fits: {
    fit: string,
    mkt: string
  }[]
}
