import { Component } from '@angular/core';

@Component({
  selector: 'alta-parcial-padron',
  templateUrl: '../views/alta-parcial-padron.html'
})
export class AltaParcialComponent {

	public datosAltaParcial:boolean = false

	constructor(){


	}

	ngOnInit(){

		
		
	}

	obtenerAltaParcial(){

		this.datosAltaParcial=true;

	}

  
}
