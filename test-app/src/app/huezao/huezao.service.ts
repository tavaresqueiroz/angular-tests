import { Injectable } from '@angular/core';

@Injectable()
export class HuezaoService {

  constructor() { }

  getHues() {
    return ['Hue1','Hue2','Service'];
  }

}
