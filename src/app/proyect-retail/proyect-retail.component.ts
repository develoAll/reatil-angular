import { Component, OnInit } from '@angular/core';
import { ObjectProduct } from './shared/interfaces/auth';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-proyect-retail',
  templateUrl: './proyect-retail.component.html',
  styleUrls: ['./proyect-retail.component.css']
})
export class ProyectRetailComponent implements OnInit{
  title = 'frontRetail';
  public loading: boolean = false;

  public grupo: number = 10;
  public listProduct: ObjectProduct[] = [];
  public sortedData: ObjectProduct[] = [];
  public tamanio: number = 0;
  public page: number = 0;
  public filtro: string = '';

  constructor(
    private serviceProduct: ProductService,
  ) { }

  ngOnInit(): void {
    // this.getSiniestrosSubFactura()
  }

  getListProduct(): void {

    this.loading = true;

    this.serviceProduct.getListProduct().subscribe((data: any) => {
      this.listProduct = data;
      this.sortedData = data;
      this.tamanio = this.listProduct.length;
      this.page = 1
      this.loading = false;
    })

  }

  filtrar(): void {
    this.page = 1;
    this.sortedData = this.listProduct.filter(
      (comprobante) =>
        comprobante.regex
          .toString()
          .toLowerCase()
          .includes(this.filtro.toLowerCase()) ||
        comprobante.age
          .toString()
          .toLowerCase()
          .includes(this.filtro.toLowerCase())
    );
  }

}
