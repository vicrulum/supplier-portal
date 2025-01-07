import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    private productsSource = new BehaviorSubject<Product[]>([]);
    currentProducts$ = this.productsSource.asObservable();

    private totalProductsSubject = new BehaviorSubject<number>(0);
    public totalProduct$ = this.totalProductsSubject.asObservable();

    private totalPriceSubject = new BehaviorSubject<number>(0);
    public totalPrice$ = this.totalPriceSubject.asObservable();

    constructor(){}

    getProducts(): Product[] {
        const products: Product[] = []; 
        this.productsSource.next(products); 
        return products;
      }

    public addProduct(product: Product){
        const updateItems = [...this.productsSource.value, product];
        this.productsSource.next(updateItems);
    }
}