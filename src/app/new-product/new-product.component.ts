import { Component, OnInit } from '@angular/core';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  iconDelete = faTimes
  iconSave = faCheck

  constructor() { }

  ngOnInit(): void {
  }

}
