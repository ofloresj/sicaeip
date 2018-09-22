import { Component } from '@angular/core';

@Component({
  selector: 'alta-padron',
  templateUrl: '../views/alta-total-padron.html'
})
export class AltaTotalComponent {

	public datosAltaTotal:boolean = false;

	constructor(){


	}

	ngOnInit(){

		
		
	}

	obtenerAltaTotal(){

		this.datosAltaTotal=true;

	}

  
}
