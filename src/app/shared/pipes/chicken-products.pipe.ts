import { Pipe, PipeTransform } from '@angular/core';
import { ProductType } from '../../../type/product.type';

@Pipe({
	name: 'chickenProducts'
})
export class ChickenProductsPipe implements PipeTransform {

	transform(products: ProductType[],): ProductType[] {
		return products.filter(item => item.title.toLowerCase().includes('кур'));
	}

}
