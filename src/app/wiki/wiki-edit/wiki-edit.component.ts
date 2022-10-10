import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki-edit',
  templateUrl: './wiki-edit.component.html',
  styleUrls: ['./wiki-edit.component.css']
})
export class WikiEditComponent implements OnInit {
  public wiki$ = this.wikiService.getOne(Number(this.route.snapshot.paramMap.get('id')));
  public wiki: Wiki = {
    id: 0,
    title: "",
    content: "",
    tags: "",
  }

  constructor(
    private route: ActivatedRoute,
    public wikiService: WikiService) { }

  ngOnInit(): void {
    this.wiki$.subscribe(wiki => {
      this.wiki = wiki;
    });
  }

  save() {
    this.wikiService.edit(this.wiki).subscribe(waht => {
      console.log("saved",waht)
    });
  }

}
