import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { BannerComponent } from './shared/banner/banner.component';
import { GridComponent } from './shared/grid/grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactoComponent, BannerComponent, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente2';
}
