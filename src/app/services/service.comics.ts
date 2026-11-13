import { Injectable } from "@angular/core";
import { Comic } from "../models/comic";

@Injectable()
export class ServiceComics {
    //para tener claro los metodos asincronos, por norma
    //deberíamos poner la palabra async al final del nombre del 
    //método
    async getComicsAsync(): Promise<Comic[]> {
        let path = "documents/comics.json"
        //realizamos la petición
        let response = await fetch(path);
        //convertimos los datos a json
        let datos = await response.json()
        //declaramos un array para extraer los datos
        let arraycomics: Comic[] = [];
        //recorremos los datos
        for (let elem of datos){
            let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
            arraycomics.push(comic);            
        }
        return arraycomics;
    }

    //inventamos un metodo para visualizar
    //como funciona
    getSaludo(): string {
        //al final del método, siempre debemos 
        //devolver algo del tipo que hemos indicado
        return "Hola, soy un servicio de martes";
    }

    getComic(): Comic {
        let comic = new Comic("Mortadelo y Filemon",
            "https://m.media-amazon.com/images/I/91VqoL0gIEL._AC_UF1000,1000_QL80_.jpg"
            , "Agentes de la Tia"
        )
        return comic;
    }
}