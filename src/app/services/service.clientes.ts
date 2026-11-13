import { Injectable } from "@angular/core";
import { Cliente } from "../models/cliente";

@Injectable()
export class ServiceClientes{

    async getClientesAsync(): Promise<Cliente[]> {
        let arrayclientes: Cliente[] = [];
        let path = "documents/clientesdatos.json";
        let response = await fetch(path);
        let datos = await response.json();
        for (let elem of datos){
            let cliente = new Cliente(elem.idcliente, elem.nombre
                , elem.paginaweb, elem.imagencliente)
            arrayclientes.push(cliente)
        }
        return arrayclientes;
    }
}