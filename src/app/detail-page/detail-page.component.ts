import {Component, Input, OnInit} from '@angular/core';
import {ChineseData} from '../data/chinese-data';
import {EnglishData} from '../data/english-data';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  @Input() position: number;
  @Input() lan: number;

  sysLan = localStorage.getItem('language');
  contentData: any;
  tagColor = [
    '#f50',
    '#2db7f5',
    '#87d068',
    '#108ee9'
  ];
  tagColorIndex() {
    return Math.floor(Math.random() * 4);
  }

  scrollingEffect(visible) {
    if (this.position === visible) {
      return '0';
    } else if (this.position > visible) {
      return '-100vh';
    } else if (this.position < visible) {
      return '100vh';
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.lan === 1) {
      this.contentData = EnglishData.content;
    }
    if (this.lan === 2) {
      this.contentData = ChineseData.content;
    }
  }

}
