import {Component, OnInit} from '@angular/core';
import {ChineseData} from './data/chinese-data';
import {EnglishData} from './data/english-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'resume';
  isCollapsed = true;
  pagePosition = 0;
  language: any;
  data: any;
  clickedPosition = localStorage.getItem('position');

  scrollToPage(position: number) {
    this.pagePosition = position;
    localStorage.setItem('position', `${position}`);
    this.clickedPosition = `${position}`;
  }

  switchLanguage(lan) {
    if (lan === 1) {
      this.language = 1;
      this.data = EnglishData.sidebar;
      localStorage.setItem('language', '1');
    } else if (lan === 2) {
      this.language = 2;
      this.data = ChineseData.sidebar;
      localStorage.setItem('language', '2');
    }
  }

  collapseSideBar(collapse: boolean) {
    if (collapse) {
      document.getElementById('main-wrapper').style.left = '-256px';
      document.getElementById('main-wrapper').style.width = 'calc(100vw + 256px)';
      document.getElementById('content-wrapper').style.width = '100vw';
      document.getElementById('content-wrapper').style.left = '0';
      document.getElementById('collapse-button').style.transform = 'rotate(180deg)';
      this.isCollapsed = false;
    } else {
      document.getElementById('main-wrapper').style.left = '0';
      document.getElementById('main-wrapper').style.width = '100vw';
      document.getElementById('content-wrapper').style.left = '256px';
      document.getElementById('content-wrapper').style.width = 'calc(100vw - 256px)';
      document.getElementById('collapse-button').style.transform = 'rotate(0deg)';
      this.isCollapsed = true;
    }
  }

  ngOnInit(): void {
    localStorage.setItem('position', `${this.pagePosition}`);
    this.clickedPosition = localStorage.getItem('position');
    const storeLanguage = localStorage.getItem('language');
    if (storeLanguage) {
      if (storeLanguage === '2') {
        this.language = 2;
        this.data = ChineseData.sidebar;
      } else {
        this.language = 1;
        this.data = EnglishData.sidebar;
      }
    } else if (!storeLanguage) {
      if (navigator.language === 'zh-CN') {
        this.language = 2;
        this.data = ChineseData.sidebar;
        localStorage.setItem('language', '2');
      } else {
        this.language = 1;
        this.data = EnglishData.sidebar;
        localStorage.setItem('language', '1');
      }
    }
  }
}
