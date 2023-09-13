import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
	selector: '[isChicken]'
})
export class IsChickenDirective implements OnInit {

	constructor(
		private templateRef: TemplateRef<any>,
		private viewContainer: ViewContainerRef
	) { }

	//1 вариант
	@Input()
	isChicken: string = "";

	ngOnInit(): void {
		if (this.isChicken.toLowerCase().includes("кур")) {
			this.viewContainer.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainer.clear();
		}
	}

	//2 вариант
	// @Input()
	// set isChicken(description: string) {
	// 	if (description.toLowerCase().includes("кур")) {
	// 		this.viewContainer.createEmbeddedView(this.templateRef);
	// 	} else {
	// 		this.viewContainer.clear();
	// 	}
	// }

}
