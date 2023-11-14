import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators} from '@angular/forms'
import { ProductComponent } from '../product/product.component';
import { ProductsService } from 'src/app/services/products.service';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  

  form = new FormGroup ({
    title: new FormControl<string>('',[ 
      Validators.required,
      Validators.minLength(2)
    ]),
    price: new FormControl<number>(0,[
      Validators.required,
      Validators.minLength(1)])

  })

  get title(){
    return this.form.controls.title as FormControl
  }

  constructor(
    private productService: ProductsService,
    private modalService: ModalService
    ) { 

    }

  ngOnInit() {
  }

  submit(){
    console.log(this.form.value)
    this.productService.create({
      title: this.form.value.title as string,
      price: this.form.value.price as number,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 4,
        count: 4
      }
    }).subscribe(()=>{
      this.modalService.close()
    })
  }

}
