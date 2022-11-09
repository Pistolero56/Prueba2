import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/modelo/api';
import { BaseCrudService } from 'src/app/servicos/base-crud.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newdato: Api = {
    id: null,
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: "",
    brand: 0,
    category: "",
    thumbnail: ""
  }


  constructor(private apiserve: BaseCrudService, private router: Router) { }

  ngOnInit() {
  }

  crearDatos(){
    this.apiserve.agregarDatos(this.newdato).subscribe()
    this.router.navigateByUrl("/listar-todo")
  }

}
