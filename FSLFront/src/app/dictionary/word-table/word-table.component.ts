import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-word-table',
  templateUrl: './word-table.component.html',
  styleUrls: ['./word-table.component.css']
})
export class WordTableComponent implements OnInit {
  @Input() wordList: string;

  constructor() { }

  ngOnInit() {
  }

}
