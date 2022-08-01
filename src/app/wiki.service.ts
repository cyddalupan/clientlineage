import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  getall() {
    return this.http.get("http://127.0.0.1:8000/api/wikibase/");
  }

  addBase() {
    const sampleAdd = {
      title: "second title",
      folder: 1
    };
    return this.http.post("http://127.0.0.1:8000/api/wikibase/", sampleAdd, httpOptions)
      .pipe(catchError(async (err) => console.error("addBase",err)));
  }

  editBase() {
    const sampleAdd = {
      title: "second title updated",
      folder: 1
    };
    return this.http.put("http://127.0.0.1:8000/api/wikibase/3/", sampleAdd, httpOptions)
      .pipe(catchError(async (err) => console.error("editBase",err)));
  }

  deleteBase() {
    return this.http.delete("http://127.0.0.1:8000/api/wikibase/3/", httpOptions)
      .pipe(catchError(async (err) => console.error("deleteBase",err)));
  }
}
