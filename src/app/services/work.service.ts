import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iwork } from '../model/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor(private http: HttpClient) { }
  getWorkList(): Observable<Iwork[]> {
    return this.http.get<Iwork[]>(`http://localhost:3000/works`)
  }
  getWork(id: any): Observable<Iwork> {
    return this.http.get<Iwork>(`http://localhost:3000/works/${id}`)
  }
  removeWork(id: any): Observable<Iwork> {
    return this.http.delete<Iwork>(`http://localhost:3000/works/${id}`)
  }
  addWork(product: any): Observable<Iwork[]> {
    return this.http.post<Iwork[]>(`http://localhost:3000/works`, product)
  }
  updateWork(product: Iwork): Observable<Iwork> {
    return this.http.put<Iwork>(`http://localhost:3000/works/${product.id}`, product)
  }
}
