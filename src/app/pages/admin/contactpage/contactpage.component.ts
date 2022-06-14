import { Component, OnInit } from '@angular/core';
import { Icontact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  contacts!: Icontact[]

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.getContact()
  }
  getContact(){
    this.contactService.getContactList().subscribe(data => {this.contacts = data})
  }
  removeContact(id: any){
    this.contactService.removeContactList(id).subscribe(data => {
      this.contacts = this.contacts.filter(item => item.id != id)
      alert('xóa thành công')
    })
  }

}
