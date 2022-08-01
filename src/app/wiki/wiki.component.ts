import { Component, OnInit } from '@angular/core';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent implements OnInit {

  constructor(public wikiService: WikiService) { }

  ngOnInit(): void {
    this.wikiService.getall().subscribe(log => {
      console.log("FIRST LOG",log);
    });
  }

  submit() {
    this.wikiService.deleteBase().subscribe(ret => {
      console.log("Return", ret);
    });
  }

}
