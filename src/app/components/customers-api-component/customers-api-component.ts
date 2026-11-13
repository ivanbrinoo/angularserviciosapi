import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { Customers } from '../../models/customers';
import { ServiceCustomers } from '../../services/service.customers';

@Component({
  selector: 'app-customers-api-component',
  standalone: false,
  styleUrl: './customers-api-component.css',
  templateUrl: './customers-api-component.html',
})
export class CustomersApiComponent implements OnInit{
  @ViewChild("cajaid") cajaid!: ElementRef;
  arraycustomers: Customers[] = [];
  customerencontrado!: Customers;
  constructor(
    private _service: ServiceCustomers,
    private _cdr: ChangeDetectorRef,
  ) {}




  async ngOnInit(): Promise<void> {
    console.log(this.arraycustomers)
    this.arraycustomers = await this._service.getCustomersAsync();
    this._cdr.detectChanges();
  }
}
