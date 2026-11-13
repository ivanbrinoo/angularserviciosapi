import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Coches } from "../models/coche";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceCoches {
    constructor(
        private _http: HttpClient

    ) {}

    async verCochesAsync(): Promise<Coches[]> {
            let request = "api/Coches";
            let url = environment.coches + request;
            console.log(url)
            return firstValueFrom(
                this._http.get<Coches[]>(url),
                
            )
            
    }

    
    
}