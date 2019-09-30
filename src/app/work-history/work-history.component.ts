import {Component, Input, OnInit} from '@angular/core';
import {EnglishData} from '../data/english-data';
import {ChineseData} from '../data/chinese-data';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css']
})
export class WorkHistoryComponent implements OnInit {
  @Input() lan: number;
  workData: any;
  worklist = localStorage.getItem('workListType');
  scrollView(n) {
    document.getElementById('workList' + n).scrollIntoView({block: 'start', behavior: 'smooth'});
    document.getElementById('work-menu' + n).style.color = '#1890ff';
    for (const i of this.workData.items) {
      if (i.id !== n) {
        document.getElementById('work-menu' + i.id).style.color = 'rgba(0, 0, 0, 0.85)';
        console.log(i.id);
      }
    }
  }

  workListType(type: number) {
    if (type === 1) {
      localStorage.setItem('workListType', '1');
      this.worklist = '1';
      document.getElementById('workListSort1').style.opacity = '1';
      document.getElementById('workListSort2').style.opacity = '0.5';
      document.getElementById('workListWrapper').style.width = '76%';
      document.getElementById('workListWrapper').style.marginLeft = '8%';
      document.getElementById('workListMenuWrapper').style.width = '16%';
      document.getElementById('workListMenuWrapper').style.left = '0';
    }
    if (type === 2) {
      this.worklist = '2';
      localStorage.setItem('workListType', '2');
      document.getElementById('workListSort2').style.opacity = '1';
      document.getElementById('workListSort1').style.opacity = '0.5';
      document.getElementById('workListWrapper').style.width = '100%';
      document.getElementById('workListWrapper').style.marginLeft = '0';
      document.getElementById('workListMenuWrapper').style.width = '0';
      document.getElementById('workListMenuWrapper').style.left = '-16%';
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.lan === 1) {
      this.workData = EnglishData.content.work;
    }
    if (this.lan === 2) {
      this.workData = ChineseData.content.work;
    }
    if (this.worklist) {
      if (this.worklist === '1') {
        document.getElementById('workListSort1').style.opacity = '1';
        document.getElementById('workListSort2').style.opacity = '0.5';
        document.getElementById('workListWrapper').style.width = '76%';
        document.getElementById('workListWrapper').style.marginLeft = '8%';
        document.getElementById('workListMenuWrapper').style.width = '16%';
        document.getElementById('workListMenuWrapper').style.left = '0';
      } else if (this.worklist === '2') {
        document.getElementById('workListSort2').style.opacity = '1';
        document.getElementById('workListSort1').style.opacity = '0.5';
        document.getElementById('workListWrapper').style.width = '100%';
        document.getElementById('workListWrapper').style.marginLeft = '0';
        document.getElementById('workListMenuWrapper').style.width = '0';
        document.getElementById('workListMenuWrapper').style.left = '-16%';
      }
    } else {
      localStorage.setItem('workListType', '1');
      document.getElementById('workListSort1').style.opacity = '1';
      document.getElementById('workListSort2').style.opacity = '0.5';
      document.getElementById('workListWrapper').style.width = '76%';
      document.getElementById('workListWrapper').style.marginLeft = '8%';
      document.getElementById('workListMenuWrapper').style.width = '16%';
      document.getElementById('workListMenuWrapper').style.left = '0';
    }
  }
}
