import { Component } from '@angular/core';
import { productList } from 'src/products';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'main-list-rout',
  templateUrl: './main-List.Rout.html',
  styleUrls: ['./main-List.Rout.css']
})
export class mainListRout {
  constructor(private clip: ClipboardService) { }
  iconCopy = faCopy
  products = productList
  copyObject() {
    this.clip.copy(JSON.stringify(productList))
    this.clip.destroy()
  }


}
