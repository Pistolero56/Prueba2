import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Api } from 'src/app/modelo/api';
import { BaseCrudService } from 'src/app/servicos/base-crud.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.page.html',
  styleUrls: ['./actualizar.page.scss'],
})
export class ActualizarPage  {


  datos: Api ={
    id: 0,
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

  constructor(private apiserve:BaseCrudService, private router: Router) { }

  ionViewWillEnter(){
    this.obtenerdatobyID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = parseInt(arr[2])
    return id
  }

  obtenerdatobyID(apiId: number){
    this.apiserve.obtenerDatoByID(apiId).subscribe(
      (resp: any)=>{
        this.datos ={
          id: resp[0].id,
          title: resp[0].title,
          description: resp[0].description,
          price: resp[0].price,
          discountPercentage: resp[0].discountPercentage,
          rating: resp[0].rating,
          stock: resp[0].stock,
          brand: resp[0].brand,
          category: resp[0].category,
          thumbnail: resp[0].thumbnail,
        }
      }
    )
  }

  actualizarDato(){
    this.apiserve.actualizarDatos(this.datos).subscribe((data) =>{
      console.log(data, "actualizado");
    });
    this.router.navigate(["/listar-todo"])
  }


}
