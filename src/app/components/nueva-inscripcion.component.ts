import { Component } from '@angular/core';

@Component({
  selector: 'alta-nueva-padron',
  templateUrl: '../views/alta-nueva-padron.html'
})
export class AltaNuevaComponent {

	public total:boolean = false;
	public parcial:boolean = false;
	public nueva:boolean = false;
	public datosAltaTotal:boolean = false
	public datosAltaParcial:boolean = false

	constructor(){


	}

	ngOnInit(){

		
		
	}

	mostrarTotal(){		

		if (!this.total) {
			this.total = true;
		}
		else{
			this.total = false;			
		}
		this.parcial = false;
		this.nueva = false;

	}

	mostrarParcial(){

		//this.cuenta = true;

		if (!this.parcial) {
			this.parcial = true;
		}
		else{
			this.parcial = false;
		}
		this.total = false;
		this.nueva = false;
	}

	mostrarNueva(){

		console.log("nueva");

		if (!this.nueva) {
			this.nueva = true;
		}
		else{
			this.nueva = false;
		}

		console.log(this.nueva);
		this.total = false;
		this.parcial = false;

	}

	obtenerAltaTotal(){

		this.datosAltaTotal=true;

	}

	obtenerAltaParcial(){

		this.datosAltaParcial=true;

	}

  
}
