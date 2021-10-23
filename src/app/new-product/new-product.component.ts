import { Component } from '@angular/core';
import { faTimes, faCheck, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { productList } from 'src/products';
import { Router } from '@angular/router';
import { Product } from '../interfaces';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent {
  constructor(private router: Router) { }
  iconDelete = faTimes
  iconSave = faCheck
  iconAdd = faPlus
  iconBack = faArrowLeft

  showNewFitFields = true;
  newProduct: Product = { product: "", fits: [] };

  createFit(row: HTMLInputElement[]) {
    row.forEach(cell => {
      (!cell.value) ? cell.classList.add('error') : cell.classList.remove('error');
    })
    if (!row[0].value || !row[1].value) return;

    this.newProduct.fits.push({ fit: row[0].value, mkt: row[1].value })
    row[0].value = row[1].value = ""
    this.showNewFitFields = false
  }

  deleteFit(index: number) {
    this.newProduct.fits.splice(index, 1)
  }

  createProduct(inputs: HTMLInputElement[]) {
    if (!this.newProduct.product) return inputs[0].classList.add('error')
    if (!this.newProduct.fits.length) {
      inputs[0].classList.remove('error')
      inputs[1].classList.add('error')
      inputs[2].classList.add('error')
      return
    }

    productList.push(this.newProduct)
    this.router.navigateByUrl('/')
  }

}