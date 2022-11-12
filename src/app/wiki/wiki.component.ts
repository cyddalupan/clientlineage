import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  public search = "";
  public page = 1;
  public allWiki = this.wikiService.getAll(this.page, this.search);
  public tags = this.wikiService.getTags();
  public timeout: any = null;
  public displayedColumns = ['id', 'title', 'delete'];

  constructor(public wikiService: WikiService) { }

  handlePageEvent(page: any) {
    this.page = page.pageIndex+1
    this.allWiki = this.wikiService.getAll(this.page, this.search);
  }

  searchTrigger() {
    if (this.timeout) window.clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.allWiki = this.wikiService.getAll(this.page, this.search);
    }, 2000);
  }

  delete(id: number) {
    if (confirm("Are you sure you want to Delete?") == true) {
      this.wikiService.delete(id).subscribe(res => {
        this.allWiki = this.wikiService.getAll(this.page, this.search);
      });
    }
  }

}
