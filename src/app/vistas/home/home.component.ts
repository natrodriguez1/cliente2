import { Component } from '@angular/core';
import { GridComponent } from '../../shared/grid/grid.component';
import { BannerComponent } from '../../shared/banner/banner.component';

@Component({
  selector: 'app-home',
  imports: [GridComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
