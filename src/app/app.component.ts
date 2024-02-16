import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbar, RouterLink, MatButton, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tasks App';
}
