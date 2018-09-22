import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'administrador',
  templateUrl: '../views/admin.html'
})
export class AdminComponent {

	public identificado;
	public usuario;

	constructor(private router: Router){


	}

	ngOnInit(){

		this.usuario = sessionStorage.getItem("id");
		this.identificado = sessionStorage.getItem("usuario");
		
	}

  
  	cerrarSesion(){

  		sessionStorage.removeItem("id");
		sessionStorage.removeItem("usuario");
		sessionStorage.clear();
		this.identificado = null;
		this.usuario = null;
		this.router.navigate(['/login']);

  	}
	
  
}
