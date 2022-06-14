import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Iproduct } from 'src/app/model/product';
import { Iwork } from 'src/app/model/work';
import { ProductService } from 'src/app/services/product.service';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
  blogs!: Iproduct[]
  works!: Iwork[]

  constructor(
    private blogService: ProductService,
    private workService: WorkService
    ) { }

  ngOnInit(): void {
    this.getBlogList()
    this.getWorkList()
  }
  getBlogList(){
    this.blogService.getBlogList().subscribe(data => {this.blogs = data})
  }
  getWorkList(){
    this.workService.getWorkList().subscribe(data => {this.works = data})
  }

}
