import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css']
})
export class ProgressComponent implements OnInit {
  progresoUno = 50;
  progresoDos = 35;

  constructor() { }

  ngOnInit(): void {
  }

  get getPorcentajeUno() {
    return `${this.progresoUno}%`;
  }

  get getPorcentajeDos() {
    return `${this.progresoDos}%`;
  }


}
