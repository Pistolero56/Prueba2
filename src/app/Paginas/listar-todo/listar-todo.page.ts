import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { BaseCrudService } from 'src/app/servicos/base-crud.service';


@Component({
  selector: 'app-listar-todo',
  templateUrl: './listar-todo.page.html',
  styleUrls: ['./listar-todo.page.scss'],
})
export class ListarTodoPage  {

  listar = []

  constructor(private apiserve: BaseCrudService, private loadingCtrl: LoadingController) { }

  ionViewWillEnter(){
    this.loadlista()
  }


  async loadlista(event?: InfiniteScrollCustomEvent){
    const loading = await this.loadingCtrl.create(
      {
        message: "Cargando...",
        spinner: "bubbles"
      }
    );
    await loading.present();

    this.apiserve.listarTodo().subscribe(

      (resp)=>{
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.listar= JSON.parse(listString)
        event?.target.complete();
      },
      (err)=>{
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

  doRefresh(){
    this.apiserve.refresh();
  }

}
