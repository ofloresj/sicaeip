import { Component } from '@angular/core';

@Component({
  selector: 'actualizar-padron',
  templateUrl: '../views/actualizar-padron.html'
})
export class ActualizaComponent {

	public contribuyente = false;

	
	constructor(){


	}

	ngOnInit(){

		
		
	}

	obtenerContribuyente(){

		this.contribuyente = true;

	}

  
}
