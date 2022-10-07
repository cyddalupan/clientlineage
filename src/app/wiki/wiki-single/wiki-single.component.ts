import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { WikiService } from 'src/app/wiki.service';

@Component({
  selector: 'app-wiki-single',
  templateUrl: './wiki-single.component.html',
  styleUrls: ['./wiki-single.component.css']
})
export class WikiSingleComponent implements OnInit {
  public wikiBase: Observable<any> = of({});
  public wikicontent: Observable<any> = of({});

  constructor(
    private route: ActivatedRoute,
    public wikiService: WikiService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.wikiBase = this.wikiService.getOneBase(params['id']);
    });

    this.wikiBase.subscribe(base => {
      this.wikicontent =  this.wikiService.getOneContent(base.id);
    });
  }

}
