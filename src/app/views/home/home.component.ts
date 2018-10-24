import { Component, OnInit } from '@angular/core';
import { Ngex } from 'ngex';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ProductosService]
})
export class HomeComponent implements OnInit {

  constructor(private ngex:Ngex, private service:ProductosService) { }

  ngOnInit() {
    this.service.getProductos();
  }

}
