import { Routes } from '@angular/router';

import { PanelPrincipal } from "../components/panel-principal.component";
import { ConsultaConponent } from '../components/consulta-adeudos.component';
import { ValidarConponent } from '../components/validar-pagos.component';
import { AltaTotalComponent } from '../components/alta-total.component';
import { ActualizaComponent } from '../components/actualizar-padron.component';
import { AltaNuevaComponent } from '../components/nueva-inscripcion.component';
import { AltaParcialComponent } from '../components/alta-parcial.component';


export const adminRoutes: Routes = [

	{
		path: "", component: PanelPrincipal
	},
	{
		path: "consulta", component: ConsultaConponent
	},
	{
		path: "validar-pagos", component: ValidarConponent
	},
	{
		path: "alta-total-padron", component: AltaTotalComponent
	},
	{
		path: "alta-parcial-padron", component: AltaParcialComponent
	},
	{
		path: "alta-nueva-padron", component: AltaNuevaComponent
	},
	{
		path: "actualizar-padron", component: ActualizaComponent
	},
	/*{
		path: "admon-equipo", component: AdmonEquipo
	},
	{
		path: "admin-equipo", component: AdminEquipo
	},
	{
		path: "admon-jugadores", component: AdmonJugadores
	}*/

];

