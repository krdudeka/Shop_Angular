import { Component, OnInit } from '@angular/core';
import {Product} from "../Product";
import {ProductStorageService} from "../../../product-storage.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  //druga zależność odpowiada za przeniesienie nas po dodaniu produktu do listy; activatedRoute wyciaga rzeczy z adresu (potrzebnme do Edit
  constructor(private productStorage: ProductStorageService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductToEdit();
  }

  //Będzie się wyświetlał jako pusty - domyślny konstruktor
  product: Product = new Product();

  saveProduct(product: Product) {
    this.productStorage.saveProduct(product);
    this.router.navigate(['/shop']);
  }

  //ma być dodawana do
  getProductToEdit() {
    this.activeRoute.paramMap.subscribe(params => {
      //działamy na tym co zwrócą parametry params; w get('nazwa parametry w adresie')
      const id = params.get('id');
      //sprawdzamy czy jest id, jeśi edytujemy to jest, jeśli dodajemy to nie ma
      if (id) {
        this.product = this.productStorage.getProduct(Number.parseInt(id));
      }
    })
  }

}
