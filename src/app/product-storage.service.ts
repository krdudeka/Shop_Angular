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
//definicja id countera
  private idCount: number = 3;

  //przypisanie i inkrementacja w komentarzu
  //w if jest sprawdzanie czy produkt ma ID, jeśli ma to go nadpisujemy, jeśli nie ma to dodajemy jako nowy
  saveProduct(product: Product) {
   /* product.id = this.idCount;
    this.products.push(product);
    this.idCount++;*/
   if (product.id){
     const productIndex = this.products.findIndex(p => p.id === product.id);
     this.products[productIndex] = product;
   } else {
     product.id = this.idCount;
     this.products.push(product);
     this.idCount++;
   }

  }

  //metoda pootrzebna do zwracania produktu po id
  getProduct(id: number) {
    const productIndex = this.products.findIndex(p => p.id === id);
    //zwracamy kopię, zamiast bezpośredniej referencji - bezpieczeństwo danych
    return {...this.products[productIndex]};
  }

}
