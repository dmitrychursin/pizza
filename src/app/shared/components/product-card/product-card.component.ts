import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ProductType } from 'src/type/product.type';
import { TitleComponent } from '../title/title.component';
import { CartProductService } from 'src/app/shared/services/cart-product.service';

@Component({
	selector: 'product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.css'],
	providers: [CartProductService]
})
export class ProductCardComponent {

  @Input() product: ProductType;
  @Output() addToCartEvent: EventEmitter<string> = new EventEmitter<string>;

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent;

  @ViewChild('elem')
  private elem!: ElementRef;


  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: "",
      title: "",
      description: "",
      datetime: ""
    }
  }




	//тоже хороший вариант если много значений
	// @Input() product: ProductType = {} as ProductType

	//вариант геттер и сеттер
	// @Input()
	// get product(): ProductType { return this._product };
	// set product(param: ProductType) {
	// 	param.title = param.title.toUpperCase();
	// 	this._product = param;
	// }
	// private _product: ProductType;




}
