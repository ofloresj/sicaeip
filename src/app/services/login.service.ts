import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarioLogin.model';

@Injectable()

export class ServicioUsuarios{

	public url:string;


	
	constructor(private _http:Http) {

		this.url = 'http://verdeporte.mx/verdeporteAPI/login';

	}

	login(listaUsuarios){
	
		var data = "login=" + listaUsuarios.login + "&passwd=" + listaUsuarios.passwd;

		let headers = new Headers({"Content-Type":"application/x-www-form-urlencoded"});

		return this._http.post(this.url, data, {headers:headers}).map(resultado => resultado.json());

	}
}


		