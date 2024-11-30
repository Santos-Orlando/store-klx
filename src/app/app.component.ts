import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';
import { Product } from './models/Product';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  products: Product[] = []; 
  base64Images: { [key: number]: string } = {};

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getProducts().subscribe((products: Product[]) => { 
    this.products = products;
    this.products.forEach(product => this.loadBase64Image(product));
    });
  }

  async loadBase64Image(product: Product) {
    try {
      const response = await fetch(product.imageUrl);
      let base64String = await response.text();
  
      base64String = base64String.replace(/\s/g, '');
  
      this.base64Images[product.id] = `data:image/png;base64,${base64String}`;
    } catch (error) {
      console.error(`Error loading image for product ${product.id}:`, error);
    }
  }
}
