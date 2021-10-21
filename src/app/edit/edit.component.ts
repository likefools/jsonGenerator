import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productList } from 'src/products';
import { faTimes, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  iconDelete = faTimes
  iconAdd = faPlus
  iconSave = faCheck
  productList: Product[] = productList
  showNewFitFields = false

  product: Product = null;
  index: number = -1;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(p => {
      console.log(p.get('index'))
      this.index = (p.get('index') as any);
      this.product = productList[this.index]
    });
  }

  ngOnInit(): void {
  }

  deleteFit(index: number) {
    this.productList[this.index]?.fits.splice(index, 1)
  }

  deleteProdcut() {
    this.productList.splice(this.index, 1)
  }

  editProduct(el: HTMLInputElement) {
    console.log(el.value)
  }

  saveNewFit(newFit: HTMLInputElement, newMkt: HTMLInputElement) {
    if (!newFit.value || !newMkt.value) return
    this.productList[this.index]?.fits.push({ fit: newFit.value, mkt: newMkt.value })
    newFit.value = ""
    newMkt.value = ""

    this.showNewFitFields = false
  }

}


interface productx {
  product: string,
  fits: {
    fit: string,
    mkt: string
  }[]
}

type Product = productx | null