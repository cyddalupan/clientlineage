import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Wiki } from './wiki';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Token 12383dcb52d627eabd39e7e88501e96a2sadc55'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WikiService {

  constructor(private http: HttpClient) { }

  getAll(currentpage: number): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/api/wiki/?page="+currentpage);
  }

  getOne(id: number): Observable<Wiki> {
    return this.http.get<Wiki>("http://127.0.0.1:8000/api/wiki/"+id);
  }

  getTags(): Observable<string> {
    return this.http.get<string>("http://127.0.0.1:8000/api/wiki/tags/");
  }

  add() {
    const sampleAdd = {
      title: "second title",
      folder: 1
    };
    return this.http.post("http://127.0.0.1:8000/api/wiki/", sampleAdd, httpOptions)
      .pipe(catchError(async (err) => console.error("addBase",err)));
  }

  edit(wiki: Wiki) {
    return this.http.put("http://127.0.0.1:8000/api/wiki/"+wiki.id+"/", wiki, httpOptions)
      .pipe(catchError(async (err) => console.error("editBase",err)));
  }

  delete() {
    return this.http.delete("http://127.0.0.1:8000/api/wiki/3/", httpOptions)
      .pipe(catchError(async (err) => console.error("deleteBase",err)));
  }
}
