import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki-single',
  templateUrl: './wiki-single.component.html',
  styleUrls: ['./wiki-single.component.css']
})
export class WikiSingleComponent implements OnInit {
  public wiki$: Observable<any> = of({});

  constructor(
    private route: ActivatedRoute,
    public wikiService: WikiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.wiki$ = this.wikiService.getOne(params['id']);
    });
  }

}
