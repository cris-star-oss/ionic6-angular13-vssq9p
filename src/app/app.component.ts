import { Component, VERSION } from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string;
  idade: number;

constructor(public toastController: ToastController,
  public alertController: AlertController,){}

  async exibirToast(mensagem: string) {
    const toast = await this.toastController.create({
      message:mensagem,
      duration: 2000,
      color: 'sucess',
    });
  }
}