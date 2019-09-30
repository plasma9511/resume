import {Component, Input, OnInit} from '@angular/core';
import {EnglishData} from '../data/english-data';
import {ChineseData} from '../data/chinese-data';

@Component({
  selector: 'app-history-component',
  templateUrl: './history-component.component.html',
  styleUrls: ['./history-component.component.css']
})
export class HistoryComponentComponent implements OnInit {
  @Input() lan: number;
  eduData: any;

  constructor() { }

  ngOnInit() {
    if (this.lan === 1) {
      this.eduData = EnglishData.content.education;
    }
    if (this.lan === 2) {
      this.eduData = ChineseData.content.education;
    }
  }

}
