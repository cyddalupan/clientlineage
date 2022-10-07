import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  public currentpage = 1;
  public allWiki = this.wikiService.getAll(this.currentpage);
  public tags = this.wikiService.getTags();

  constructor(public wikiService: WikiService) { }

  handlePageEvent(page: any) {
    this.allWiki = this.wikiService.getAll(page.pageIndex+1);
  }

  submit() {
    this.wikiService.deleteBase().subscribe(ret => {
      console.log("Return", ret);
    });
  }

}
