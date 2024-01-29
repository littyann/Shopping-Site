import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  searchProducts(searchText: string): Observable<any[]> {
    const url = `${this.apiUrl}/products/search?q=${searchText}`;
    return this.http.get<any[]>(url);
  }

  getProductDetails(productId: string): Observable<any> {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.get<any>(url);
  }

  registerUser(userDetails: any): Observable<any> {
    const url = `${this.apiUrl}/users/add`;
    return this.http.post<any>(url, userDetails);
  }
}
