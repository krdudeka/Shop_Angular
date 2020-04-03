import { Component, OnInit } from '@angular/core';
import {Product} from "./Product";
import {ProductStorageService} from "../../product-storage.service";
import {HttpClientService} from "../../http-client.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];


  //metoda uruchamiająca się przy wyświetlaniu strony/ładowaniu
  ngOnInit(): void {
  this.getProducts()
  }

  constructor(private productStorage: ProductStorageService, private httpClient: HttpClientService) {}

  //obserwator zwraca wartość produkty => funkcja bezimienna => bierzemy produkty z tablicy i je przypisujemy do tej tablicy
  /*  getProducts() {
    this.productStorage.getProducts().subscribe(products => this.products = products);
  }*/
//zmiana na httpClient - żeby korzystać z zewnętrznego serwera
    getProducts() {
    this.httpClient.getProducts().subscribe(products => this.products = products);
  }

 /* removeProduct(id: number) {
      this.productStorage.removeProduct(id);
  }*/

//zmiana na httpClient
  removeProduct(id: number) {
    this.httpClient.removeProduct(id).subscribe(r => {
      this.getProducts();
    });
  }

}
