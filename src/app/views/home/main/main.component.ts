import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CartService} from "../../../shared/services/cart.service";
import {map, Subject, Subscription} from "rxjs";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  private subject: Subject<number>;
  private subscription: Subscription | null = null;

  constructor(public cartService: CartService, private modalService: NgbModal) {
    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete();
    }, 5000);

  }

  ngOnInit(): void {

    //const myModalAlternative = new bootstrap.Modal('#myModal', {})
    //myModalAlternative.show();

    this.subscription = this.subject
      .subscribe(
      {
        next: (param: number) => {
          console.log('subscriber 1: ' + param);
        },
        complete: () => {
          console.log('ВСЁ!!');
        },
        error: (error: string) => {
          console.log('ERROR!!! ' + error);
        }
      }
    );

  }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    // this.popupComponent.open();
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  test() {

    this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number;
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ' + param);
      });
  }

}
