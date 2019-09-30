import {Component, Input, OnInit} from '@angular/core';
import {EnglishData} from '../data/english-data';
import {ChineseData} from '../data/chinese-data';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html',
  styleUrls: ['./reference.component.css']
})
export class ReferenceComponent implements OnInit {
  @Input() lan: number;
  refData: any;
  constructor() { }

  ngOnInit() {
    if (this.lan === 1) {
      this.refData = EnglishData.content.reference;
    }
    if (this.lan === 2) {
      this.refData = ChineseData.content.reference;
    }
  }

}
