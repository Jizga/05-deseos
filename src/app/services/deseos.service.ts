import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.module';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {


  listas: Lista[] = [];

  constructor() {

    const lista1 = new Lista('Recolectar las piedras del Infinito');
    const lista2 = new Lista('Héroe a desaparecer');

    this.listas.push(lista1, lista2);

  }


}
