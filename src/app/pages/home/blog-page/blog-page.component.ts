import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent implements OnInit {
  blogs!: Iproduct[]

  constructor(private blogService: ProductService) { }

  ngOnInit(): void {
    this.getBlogList()
  }
  getBlogList(){
    this.blogService.getBlogList().subscribe(data => {this.blogs = data})
  }

}
