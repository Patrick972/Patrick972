import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoesService {

  constructor() { }
  tbProducts : any[] = [
    {
      "id":0,
      "name":"nike air vapormar evo",
      "image": "assets/img/chaussure-air-vapormax-evo.jpg",
      "price":250,
      "promo":true,
      "desc":"chaussure de la marque Nike"
    },
    {
      "id":1,
      "name":"nike air classic",
      "image": "assets/img/Nike classic.jpg",
      "price":250,
      "promo":true,
      "desc":"chaussure de la marque Nike"
    },
    {
      "id":2,
      "name":"adidas supersatr",
      "image": "assets/img/adidas superstar.jfif",
      "price":250,
      "promo":true,
      "desc":"chaussure de la marque Adidas"
    },
    {
      "id":3,
      "name":"adidas classic",
      "image": "assets/img/adidas 2.jpg",
      "price":250,
      "promo":true,
      "desc":"chaussure de la marque Adidas"
    },
    {
      "id":4,
      "name":"puma bmw",
      "image": "assets/img/puma bmw.jfif",
      "price":250,
      "promo":true,
      "desc":"chaussure de la marque Puma"
    },
    {
      "id":4,
      "name":"puma classic",
      "image": "assets/img/puma classic.jpg",
      "price":250,
      "promo":true,
      "desc":"chaussure de la marque Puma"
    }
  ]

  
}
