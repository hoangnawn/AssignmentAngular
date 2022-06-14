import { Component, OnInit } from '@angular/core';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.css']
})
export class WorkPageComponent implements OnInit {
  works!: Iwork[]

  constructor(
    private workService: WorkService
  ) { }

  ngOnInit(): void {
    this.getWorkList()
  }
  getWorkList(){
    this.workService.getWorkList().subscribe(data => {this.works = data })
  }

}
