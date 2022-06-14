import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Icontact } from 'src/app/model/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Icontact= {
    name: "",
    email: "",
    message: "",
    date: Date()
  }

  constructor(
    private contactService: ContactService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.contactService.addContactList(this.contact).subscribe(data => {
      alert('Gửi liên hệ thành công')
      window.location.reload()
    })
  }

}
