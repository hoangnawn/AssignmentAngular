import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }
  getContactList(): Observable<Icontact[]>{
    return this.http.get<Icontact[]>(`http://localhost:3000/contacts`)
  }
  getContact(id: any): Observable<Icontact>{
    return this.http.get<Icontact>(`http://localhost:3000/contacts/${id}`)
  }
  addContactList(contact: any): Observable<Icontact[]>{
    return this.http.post<Icontact[]>(`http://localhost:3000/contacts`, contact)
  }
  removeContactList(id: any): Observable<Icontact>{
    return this.http.get<Icontact>(`http://localhost:3000/contacts/${id}`)
  }
}
