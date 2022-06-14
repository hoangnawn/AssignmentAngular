import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  getBlogList(): Observable<Iproduct[]> {
    return this.http.get<Iproduct[]>(`http://localhost:3000/blogs`)
  }
  getBlog(id: any): Observable<Iproduct> {
    return this.http.get<Iproduct>(`http://localhost:3000/blogs/${id}`)
  }
  removeBlog(id: any): Observable<Iproduct> {
    return this.http.delete<Iproduct>(`http://localhost:3000/blogs/${id}`)
  }
  addBlog(product: any): Observable<Iproduct[]> {
    return this.http.post<Iproduct[]>(`http://localhost:3000/blogs`, product)
  }
  updateBlog(product: Iproduct): Observable<Iproduct> {
    return this.http.put<Iproduct>(`http://localhost:3000/blogs/${product.id}`, product)
  }
}
