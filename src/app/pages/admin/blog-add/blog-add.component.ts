import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
import { Uploader, UploaderOptions, UploaderResult } from "uploader";


@Component({
  selector: 'app-blog-add',
  templateUrl: './blog-add.component.html',
  styleUrls: ['./blog-add.component.css']
})
export class BlogAddComponent implements OnInit {
  blog: Iproduct = {
    title: "",
    desc: "",
    content: "",
    date: Date()
  }

  constructor(
    private productService: ProductService,
    private router: Router,
    private getId: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.getId.snapshot.paramMap.get('id')
    this.productService.getBlog(id).subscribe(data=> this.blog = data)
  }
  onSubmit(){
    const id = this.getId.snapshot.paramMap.get('id')
    if(id){
      this.productService.updateBlog(this.blog).subscribe(data => {this.router.navigateByUrl('/admin/blog')})
    }else{
      this.productService.addBlog(this.blog).subscribe(data => {
        this.router.navigateByUrl('/admin/blog')
      })
    }
  }

}
