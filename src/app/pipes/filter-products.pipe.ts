import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../models/product';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], seach:string): IProduct[] {
    if(seach.length === 0) return products
    return products.filter(p=> p.title.toLowerCase().includes(seach.toLowerCase()))
  }

}
