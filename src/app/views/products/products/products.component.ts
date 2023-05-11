import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../../type/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {HttpClient} from "@angular/common/http";
import {Subscription, tap} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: ProductType[] = [];

  private subscriptionProductService: Subscription | null = null;

  loading: boolean = false;

  constructor(private productService: ProductService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscriptionProductService = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
            console.log('next');
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }

  ngOnDestroy() {
    this.subscriptionProductService?.unsubscribe();
  }


}
