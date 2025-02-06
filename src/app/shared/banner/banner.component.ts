import { Component } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-banner',
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  fotos: Foto[] = [];
  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta =>{
      this.fotos = respuesta as Array<Foto>
    })
  }
}
