import { Component } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
	selector: 'footer-component',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent {

	constructor(public cartService: CartService) { }

}
