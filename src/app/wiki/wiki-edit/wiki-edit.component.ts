import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
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
    author_id: 0,
  }

  constructor(
    private route: ActivatedRoute,
    public wikiService: WikiService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.wiki$.subscribe(wiki => {
      this.wiki = wiki;
    });
  }

  save() {
    this.wikiService.edit(this.wiki).subscribe(res => {
      if(res.error && Object.keys(res.error)[0])
        this._snackBar.open(
          Object.keys(res.error)[0].toUpperCase()+" : "+res.error[Object.keys(res.error)[0]][0],
          "Close"
        );
      else
        this.router.navigate(['/wiki/'+Number(this.route.snapshot.paramMap.get('id'))]);
    });
  }

}
