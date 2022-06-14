import { Component, OnInit } from '@angular/core';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-post',
  templateUrl: './work-post.component.html',
  styleUrls: ['./work-post.component.css']
})
export class WorkPostComponent implements OnInit {
  works!: Iwork[];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.getBlogList()
  }
  getBlogList(){
    this.workService.getWorkList().subscribe(data => {this.works = data})
  }
  remove(id: any){
    this.workService.removeWork(id).subscribe(data => {
      this.works = this.works.filter(item => item.id != id)
      alert('xóa thành công')

    })
  }

}
