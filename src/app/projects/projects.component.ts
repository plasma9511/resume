import {Component, Input, OnInit} from '@angular/core';
import {EnglishData} from '../data/english-data';
import {ChineseData} from '../data/chinese-data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() lan: number;
  projectData: any;
  constructor() { }

  ngOnInit() {
    if (this.lan === 1) {
      this.projectData = EnglishData.content.projects;
    }
    if (this.lan === 2) {
      this.projectData = ChineseData.content.projects;
    }
  }

}
