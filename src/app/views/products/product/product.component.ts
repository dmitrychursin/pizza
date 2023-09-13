import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../type/product.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  product: ProductType;

  private subscriptionActivatedRoute: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: "",
      title: "",
      description: "",
      datetime: ""
    }
  }

  ngOnInit() {
    this.subscriptionActivatedRoute = this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {

        this.productService.getProduct(+params['id'])
          .subscribe({
            next: (data) => {
              this.product = data;
            },
            error: (error) => {
              console.log(error);
              this.router.navigate(['/']);
            }
          });
      }
    });
  }

  ngOnDestroy() {
    this.subscriptionActivatedRoute?.unsubscribe();
  }


}
