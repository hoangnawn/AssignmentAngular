import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iwork } from 'src/app/model/work';
import { WorkService } from 'src/app/services/work.service';

@Component({
  selector: 'app-work-detail-page',
  templateUrl: './work-detail-page.component.html',
  styleUrls: ['./work-detail-page.component.css']
})
export class WorkDetailPageComponent implements OnInit {
  works!: Iwork

  constructor(
    private workService: WorkService,
    private getId: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.getId.snapshot.paramMap.get('id')
    this.workService.getWork(id).subscribe(data => this.works = data)
  }

}
