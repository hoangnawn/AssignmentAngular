import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
  blogs!: Iproduct[];

  constructor(private blogService: ProductService) { }

  ngOnInit(): void {
    this.getBlogList()
  }
  getBlogList(){
    this.blogService.getBlogList().subscribe(data => {this.blogs = data})
  }
  remove(id: any){
    this.blogService.removeBlog(id).subscribe(data => {
      this.blogs = this.blogs.filter(item => item.id != id)
      alert('xóa thành công')
    })
  }

}
