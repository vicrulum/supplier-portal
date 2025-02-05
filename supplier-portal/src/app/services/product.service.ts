import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private originalProducts: Product[] = [
    {
      id: 1,
      categoryId: 1,
      name: 'Elote',
      description: 'Caja de elotes con 90 pz',
      price: 560,
      quantity: 0
    },
    {
      id: 2,
      categoryId: 1,
      name: 'Boneless',
      description: 'Caja con boneless con 120 pz',
      price: 1300,
      quantity: 0
    },
    {
      id: 3,
      categoryId: 1,
      name: 'Mayonesa',
      description: '30 envases',
      price: 872,
      quantity: 0
    },
    {
      id: 4,
      categoryId: 1,
      name: 'Catsup Heinz',
      description: '25 envases',
      price: 798,
      quantity: 0
    },
    {
      id: 5,
      categoryId: 1,
      name: 'Moztaza',
      description: '32 envases',
      price: 923,
      quantity: 0
    },
    {
      id: 6,
      categoryId: 1,
      name: 'Alita de pollo',
      description: '15 kg',
      price: 452,
      quantity: 0
    },
    {
      id: 7,
      categoryId: 1,
      name: 'Deshebrada',
      description: '10 kg',
      price: 683,
      quantity: 0
    },
    {
      id: 8,
      categoryId: 1,
      name: 'Servilletas',
      description: '500 pz',
      price: 70,
      quantity: 0
    },
  ];
  private productsSubject = new BehaviorSubject<Product[]>(this.originalProducts);
  products$ = this.productsSubject.asObservable();

  private productsInCartSubject = new BehaviorSubject<Product[]>([]);
  productsInCart$ = this.productsInCartSubject.asObservable();

  private totalProductsSubject = new BehaviorSubject<number>(0);
  public totalProduct$ = this.totalProductsSubject.asObservable();

  private totalPriceSubject = new BehaviorSubject<number>(0);
  public totalPrice$ = this.totalPriceSubject.asObservable();

  constructor() {}

  filterProducts(keyword: string): void {
    const filteredProducts = this.originalProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.description.toLowerCase().includes(keyword.toLowerCase())
    );
    this.productsSubject.next(filteredProducts);
  }

  public addProduct(product: Product) {
    const productIndex = this.productsInCartSubject.value.findIndex(f => f.id === product.id);
    if (productIndex !== -1) {
      this.productsInCartSubject.value[productIndex].quantity = product.quantity;
      const updateItems = [...this.productsInCartSubject.value];
      this.productsInCartSubject.next(updateItems);
    }else{
      const updateItems = [...this.productsInCartSubject.value, product];
      this.productsInCartSubject.next(updateItems);
    }
  }

  public removeProduct(product: Product) {
    const productIndex = this.productsInCartSubject.value.findIndex(f => f.id === product.id);
    if (productIndex !== -1 && product.quantity !== 0) {
      this.productsInCartSubject.value[productIndex].quantity = product.quantity;
      const updateItems = [...this.productsInCartSubject.value];
      this.productsInCartSubject.next(updateItems);
    }else{
      const currentItems = this.productsInCartSubject.value;
      const updatedItems = currentItems.filter(p => p.id !== product.id);
      this.productsInCartSubject.next(updatedItems);
    }
  }
}
