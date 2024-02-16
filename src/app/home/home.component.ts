import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardTitle
} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardActions,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardImage,
    MatButton,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
