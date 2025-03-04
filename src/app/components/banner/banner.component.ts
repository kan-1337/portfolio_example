import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, inject } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { TitleCasePipe } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    TitleCasePipe,
  ],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  protected themeService = inject(ThemeService)
}
