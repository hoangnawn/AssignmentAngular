import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-workadd',
  templateUrl: './workadd.component.html',
  styleUrls: ['./workadd.component.css']
})
export class WorkaddComponent implements OnInit {
  blog: Iwork = {
    title: "",
    desc: "",
    img: "",
    content: "",
    date: Date()
  }

  constructor(
    private workService: WorkService,
    private router: Router,
    private getId: ActivatedRoute
  ) { }
  ngOnInit(): void {
    const id = this.getId.snapshot.paramMap.get('id')
    this.workService.getWork(id).subscribe(data=> this.blog = data)
  }
  onSubmit(){
    const id = this.getId.snapshot.paramMap.get('id')
    if(id){
      this.workService.updateWork(this.blog).subscribe(data => {this.router.navigateByUrl('/admin/work')})
    }else{
      this.workService.addWork(this.blog).subscribe(data => {
        this.router.navigateByUrl('/admin/work')
      })
    }
  }
}
