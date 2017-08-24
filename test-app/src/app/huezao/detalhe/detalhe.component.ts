import { Component } from '@angular/core';
import { HuezaoService } from '../huezao.service';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})
export class DetalheComponent {

  huezeiros: string[];
  title : string;

  constructor(private huezaoService: HuezaoService) {
    this.title = 'Funcionando';
    this.huezeiros = this.huezaoService.getHues();
  }

}
