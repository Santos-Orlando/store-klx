import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  

  ngOnInit() {
      this.apiService.getProducts().subscribe((data) => {
          this.products = data;
      });
  }

}
