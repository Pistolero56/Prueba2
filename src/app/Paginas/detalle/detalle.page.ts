import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseCrudService } from 'src/app/servicos/base-crud.service';
import { Api } from 'src/app/modelo/api';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/servicos/cart.service';
import { CarritoPage } from '../carrito/carrito.page';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  [x: string]: any;
  cart = [];
  products: any;
  cartItemCount: BehaviorSubject<number>;

  api: Api ={
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


  constructor(private apiserve: BaseCrudService, private router: Router, private cartService: CartService) { }

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
        this.api ={
          id: resp[0].id,
          title: resp[0].title,
          description: resp[0].description,
          price: resp[0].price,
          discountPercentage: resp[0].discountPercentage,
          rating: resp[0].rating,
          stock: resp[0].stock,
          brand: resp[0].brand,
          category: resp[0].category,
          thumbnail: resp[0].thumbnail
        }
      }
    )
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }

  addToCart(product) {
    this.cartService.addProduct(product);
    console.log('Agregado al carrito');
  }

  async openCart() {

    let modal = await this.modalCtrl.create({
      component: CarritoPage,
      cssClass: 'cart-modal'
    });
    modal.present();
  }

}
