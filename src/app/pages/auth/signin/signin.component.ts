import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/model/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: Iuser = {
    password: "",
    email:""
  }

  constructor(
    private userService: AuthService,
    private route:Router
  ) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.userService.signin(this.user).subscribe(data => {
      localStorage.setItem("user", JSON.stringify(data))
      alert('đăng nhập thành công')
      this.route.navigateByUrl('/admin/blog')
    },error=>{
      alert('Tài khoản không đúng vui lòng liên hệ để biết thêm chi tiết')
      this.route.navigateByUrl('/')
    })
  }

}
