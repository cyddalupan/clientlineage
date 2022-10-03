import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.css']
})
export class WikiComponent {

  public allWiki = this.wikiService.getAll();
  public tags = this.wikiService.getTags();

  constructor(public wikiService: WikiService) { }

  submit() {
    this.wikiService.deleteBase().subscribe(ret => {
      console.log("Return", ret);
    });
  }

}
