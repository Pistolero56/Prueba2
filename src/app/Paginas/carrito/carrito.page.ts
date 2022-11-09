import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CartService } from 'src/app/servicos/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit {

  cart: any;

  constructor(private cartService: CartService,  private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.precio * j.cantidad, 0);
  }

  close() {
    this.router.navigate(['/listar-todo']);
  }

  async Pagar() {

    const alert = await this.alertCtrl.create({
      header: 'Confirmar',
      message: '¿Desea confirmar la compra?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        }, {
          text: 'Confirmar',
          handler: () => {
            this.cartService.clearCart();
            this.router.navigate(['/listar-todo']);
          }
        }
      ]
    });
    alert.present();
  }


}
