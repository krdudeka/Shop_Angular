import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shippingMethodName1: string = "Paczkomat";
  shippingMethodName2: string = "Kurier - przedpłąta";
  shippingMethodName3: string = "Kurier - pobranie";

  shippingMwthodPrice1: number = 10.00;
  shippingMwthodPrice2: number = 15.20;
  shippingMwthodPrice3: number = 20.22;

}
