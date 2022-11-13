import { Component, OnInit } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {
  public search = "";
  public selectedTag = "";
  public page = 1;
  public allWiki = this.wikiService.getAll(this.page, this.search, this.selectedTag);
  public tags = this.wikiService.getTags();
  public timeout: any = null;
  public displayedColumns = ['id', 'title', 'delete'];

  constructor(public wikiService: WikiService) { }

  handlePageEvent(page: any) {
    console.log("handlePageEvent");
    this.page = page.pageIndex+1
    this.allWiki = this.wikiService.getAll(this.page, this.search, this.selectedTag);
  }

  searchTrigger() {
    console.log("searchTrigger");
    if (this.timeout) window.clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.allWiki = this.wikiService.getAll(this.page, this.search, this.selectedTag);
    }, 2000);
  }

  tagTrigger() {
    console.log("tagTrigger");
    console.log("this.selectedTag", this.selectedTag);
    this.allWiki = this.wikiService.getAll(this.page, this.search, this.selectedTag);
  }

  delete(id: number) {
    console.log("delete");
    if (confirm("Are you sure you want to Delete?") == true) {
      this.wikiService.delete(id).subscribe(res => {
        this.allWiki = this.wikiService.getAll(this.page, this.search, this.selectedTag);
      });
    }
  }

}
