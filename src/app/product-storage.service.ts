import { Injectable } from '@angular/core';
import {Product} from "./shop/products/Product";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductStorageService {

  constructor() { }

  //prywatna, żeby dostęp był tylko przez metody, żeby ktoś niepowołany nie edytował tych tabel
  private products: Product[] = [
    {id: 1, name: 'Produkt 1', price: 10.00, quantity: 1000, available: true},
    {id: 2, name: 'Produkt 2', price: 20.20, quantity: 5, available: false}
  ];

  //zwracamy obiekt obserwatora, żeby tablica aktualizowałą się; zwracamy metodę of, któa zwraca obserwatora
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  //p jest to pojedyńczy obiekt; findIndex iteruje po id w tablicy, jeśli znajdzie, to go zwróci; === bo przyrównujemy
  removeProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    this.products.splice(productIndex, 1);
  }

}
