import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Wiki } from '../wiki';
import { WikiService } from '../wiki.service';

@Component({
  selector: 'app-wiki-create',
  templateUrl: './wiki-create.component.html',
  styleUrls: ['./wiki-create.component.css']
})
export class WikiCreateComponent implements OnInit {
  public wiki: Wiki = {
    id: 0,
    title: "",
    content: "",
    tags: "",
    author_id: 1
  }

  constructor(
    public wikiService: WikiService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.wikiService.add(this.wiki).subscribe(res => {
      if(res.error && Object.keys(res.error)[0])
        this._snackBar.open(
          Object.keys(res.error)[0].toUpperCase()+" : "+res.error[Object.keys(res.error)[0]][0],
          "Close"
        );
      else
        this.router.navigate(['/wiki']);
    });
  }

}
