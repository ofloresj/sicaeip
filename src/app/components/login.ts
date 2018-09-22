import { Component } from '@angular/core';
import { Usuarios } from '../models/usuarioLogin.model';
import { ServicioUsuarios } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: '../views/login.html',
  providers:[ServicioUsuarios]
})
export class LoginComponent {

	public identificado;
	public usuariosIngreso:Usuarios;
	public validarIngreso:boolean = false;
	public usuario;
	public usuarioValidado;
	public rol;

	constructor(private servicioUsuarios:ServicioUsuarios, private router: Router){

		this.usuariosIngreso = new Usuarios("", "");

	}

	ngOnInit(){

		this.usuario = sessionStorage.getItem("id");
		this.identificado = sessionStorage.getItem("usuario");

		if (this.identificado) {
			this.router.navigate(['/administrador']);			
		}
	}

	onSubmit(){

		this.servicioUsuarios.login(this.usuariosIngreso).subscribe(

				resultado => {

					this.rol = resultado.rol;
					this.usuarioValidado = resultado.usuario;
										
						if (resultado.htmlStatus == "200") {
							
							
							sessionStorage.setItem("id", this.rol);

							sessionStorage.setItem("usuario", this.usuarioValidado);
							this.router.navigate(['/administrador']);	

						}
						else{

							this.validarIngreso = true;
						}

				},

				error => {

					var errorMensaje = <any>error;

					if (errorMensaje) {
						this.validarIngreso = true;
					}
					

				}

			)

	}
  
	
  
}
