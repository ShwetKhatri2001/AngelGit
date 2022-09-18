import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.css'],
})
export class RepositoryListComponent implements OnInit {
  @Input()
  userRepositories: any = [];

  @Input()
  isDataRetrieved: boolean = false;

  @Input()
  page_num: number = 1;

  @Input()
  page_size: number = 8;

  @Input()
  total_pages: number = 1;

  @Output()
  reloadRepoEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  generateFake(x: number) {
    let fakes: number[] = [];
    for (let i = 0; i < x; i++) {
      fakes.push(i);
    }
    return fakes;
  }

  reloadRepos($event: any) {
    this.reloadRepoEvent.emit($event);
  }
}
