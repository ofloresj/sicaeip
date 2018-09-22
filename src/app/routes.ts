import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importamos los Componentes
import { LoginComponent } from "./components/login";
import { AdminComponent } from './components/admin.component';
import { adminRoutes } from './components/admin.routes';



const appRoutes: Routes = [

	{path: "", component: LoginComponent},
	{path: "login", component: LoginComponent},
	{path: "administrador", component: AdminComponent , children: adminRoutes},
	{path: "**", component: LoginComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

