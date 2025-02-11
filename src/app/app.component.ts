import { Component } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { BannerComponent } from './shared/banner/banner.component';
import { GridComponent } from './shared/grid/grid.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactoComponent, BannerComponent, GridComponent, FooterComponent, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cliente2';
}
