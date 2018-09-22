import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'consulta-adeudos',
  templateUrl: '../views/consulta-adeudos.html'
})
export class ConsultaConponent {

	public cuenta:boolean = false;
	public nombre:boolean = false;
	public today:number;
	public detalle:boolean = false;

	constructor(private router: Router){


	}

	ngOnInit(){

		this.today = Date.now();
		
	}

	buscaCuenta(){		

		if (!this.cuenta) {
			this.cuenta = true;
		}
		else{
			this.cuenta = false;			
		}
		this.nombre = false;

	}

	buscaNombre(){

		if (!this.nombre) {
			this.nombre = true;
		}
		else{
			this.nombre = false;
		}
		this.cuenta = false;

	}

	consultaCuenta(){

		this.detalle = true;

	}

	consultaNombre(){

		this.detalle = true;

	}

	cancelar(){

		this.router.navigate(['/administrador']);

	}
	
  
}
