import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Customers } from "../models/customers";
import { firstValueFrom } from "rxjs";
import { environment } from "../../environments/environment.development";

@Injectable({
    providedIn: 'root'
})
export class ServiceCustomers {

    constructor(private _http: HttpClient) {}

    async getCustomersAsync(): Promise<Customers[]> {

        let request = "Customers";
        let url = environment.customers + request;

        const response: any = await firstValueFrom(
            this._http.get<any>(url)
        );

        return response.value;
    }
    async findCustomersAsync(CustomerID: number): Promise<Customers>{
            let request = "api/hospitales/" + CustomerID;
            let url = environment.apihospitales + request;
            return firstValueFrom(
                this._http.get<Customers>(url)
            )
        }
}