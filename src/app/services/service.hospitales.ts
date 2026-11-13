import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Hospital } from "../models/hospital";
import { environment } from "../../environments/environment.development";
import { firstValueFrom } from "rxjs";

@Injectable()
export class ServiceHospitales {
    constructor (
        private _http: HttpClient
    ){}

    async getHospitalesAsync(): Promise<Hospital[]> {
        let request = "api/hospitales";
        let url = environment.apihospitales + request;
        return firstValueFrom(
            this._http.get<Hospital[]>(url)
        )
    }

    async findHospitalAsync(idhospital: number): Promise<Hospital>{
        let request = "api/hospitales/" + idhospital
        let url = environment.apihospitales + request;
        return firstValueFrom(
            this._http.get<Hospital>(url)
        )
    }
}