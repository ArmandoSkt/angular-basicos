import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeoreComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeoreComponent,
        ListadoComponent
    ],
    exports: [
        HeoreComponent,
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})

export class HeroesModule{

}