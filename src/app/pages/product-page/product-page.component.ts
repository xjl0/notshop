import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';
import { Observable, tap } from 'rxjs';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  title = 'Not Shop';

  // products:IProduct[] = []  // передача продуктов до стрима
  loading = false
  // products$: Observable <IProduct[]>
  term=''

  constructor(
     public productsService: ProductsService,
     public modalService: ModalService
    ){

  }

  ngOnInit(): void {
    this.loading=true
    this.productsService.getAll().subscribe(()=>{
      // console.log(products)
      // this.products = products
      this.loading= false
    })  // получение продуктов от серверв до стрима

    // this.products$ = this.productsService.getAll().pipe(
    //   tap(()=>this.loading= false
    //   )
    // )
  }
  
}
