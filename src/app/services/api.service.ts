import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    private baseUrl = 'http://localhost:8080'; // URL del backend Spring Boot

    constructor(private http: HttpClient) {}

    // getProducts(): Observable<any> {
    //     return this.http.get(`${this.baseUrl}/api/products`).pipe(
    //       map((product : any) => product as Product[])
    //     );
    // }

    getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(`${this.baseUrl}/api/products`); // Especifica directamente el tipo
    }

}
