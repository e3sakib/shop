import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = new Product();
  products: Product[] = [];
  isSave: boolean = true;
  proIndex: number = -1

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    console.log(this.product);

    this.products.push(this.product);
    this.product = new Product();

  }
  resetForm() {
    this.product = new Product();
  }

  editProduct(i: number) {
    this.proIndex = i
    this.product.name = this.products[i].name
    this.product.quantity = this.products[i].quantity
    this.product.price = this.products[i].price
    this.product.remarks = this.products[i].remarks
    this.isSave = false
  }

  updateProduct() {
    this.isSave = true
    this.products[this.proIndex] = this.product;
    this.resetForm()
  }

  deleteProduct(i: number) {
    this.products = this.products.filter((p, index) => i != index)
  }

}
