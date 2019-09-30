import {Component, Input, OnInit} from '@angular/core';
import {EnglishData} from '../data/english-data';
import {ChineseData} from '../data/chinese-data';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  @Input() lan: number;
  introData: any;
  contactVisible = false;
  tplModal: any;
  password = 'jack123456';
  inputPassword: string;
  constructor(
    private modalService: NzModalService,
    private messageService: NzMessageService
  ) { }
  tagColor = [
    '#f50',
    '#2db7f5',
    '#87d068',
    '#108ee9'
  ];

  verifyPassword() {
    if (this.inputPassword === this.password) {
      this.contactVisible = true;
      this.messageService.success(this.introData.contactDetails.success, {nzDuration: 3000});
      this.tplModal.destroy();
      return true;
    } else {
      this.contactVisible = false;
      this.messageService.error(this.introData.contactDetails.wrong, {nzDuration: 3000});
      this.tplModal.destroy();
      return true;
    }
  }

  createTplModal(tplTitle, tplContent, tplFooter): void {
    this.tplModal = this.modalService.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: true,
      nzClosable: true,
      nzOnOk: () => {
        this.verifyPassword();
      }
    });
  }

  revealContact(tplT, tplC, tplF) {
    if (this.contactVisible === false) {
      this.createTplModal(tplT, tplC, tplF);
    } else {
      this.contactVisible = false;
    }
  }
  tagColorIndex() {
    return Math.floor(Math.random() * 4);
  }
  ngOnInit() {
    if (this.lan === 1) {
      this.introData = EnglishData.content.introduction;
    }
    if (this.lan === 2) {
      this.introData = ChineseData.content.introduction;
    }
  }
}
