import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ngex } from 'ngex';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {

  constructor(private http:HttpClient, private ngex:Ngex) { }

  getProductos(){
    this.http.get('./assets/listaProductos.json').subscribe(response => {
      this.ngex.emit('GET_PRODUCTOS', response['data']);
    })
  }

  getProductosName(name){
    //return this.http.get('' + name)
  }

}