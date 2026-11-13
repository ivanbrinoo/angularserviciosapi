import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Persona } from "../models/persona";
import { firstValueFrom } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment.development";

@Injectable()
export class ServicePersonas {
    //en los servicios Api, debemos recuperar HttpClient
    constructor(
        private _http: HttpClient
    ) {}

    async getPersonasAsync(): Promise<Persona[]>{
        //necesitamos la url de nuestro servicio
        let request = "api/personas";
        let url = environment.apipersonas + request
        //devolvemos el primer valor del get
        return firstValueFrom(
            //hacemos la petición con http
            this._http.get<Persona[]>(url)
        )
    }

    async findPersonaAsync(id: number): Promise<Persona>{
        //api/personas/1
        let request = "api/personas/" + id;
        let url = environment.apipersonas + request;
        return firstValueFrom(
            this._http.get<Persona>(url)
        )
    }
}