import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css']
})
export class BlogDetailPageComponent implements OnInit {
  blogs!: Iproduct

  constructor(
    private blogservice: ProductService,
    private getId: ActivatedRoute
    
    ) { }

  ngOnInit(): void {
    const id = this.getId.snapshot.paramMap.get('id')
    this.blogservice.getBlog(id).subscribe(data => this.blogs = data)
  }
  

}
