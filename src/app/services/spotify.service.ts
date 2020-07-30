import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
   
  }


  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQBwUcloGX74dV69DIPWJr2UPliTurcf_6kDT0TUKmExhBuNW0kEfKytDv1h-X_SYxVGS6X4KcrPRcU3VvY'
    });
    return this.http.get(url, { headers });
  }

  getNewRealeases(){

    return this.getQuery("browse/new-releases").pipe(map(data =>{
      return data['albums'].items;
    }));
     
  }

  getArtist(strSearch: string){
    return this.getQuery(`search?q=${strSearch}&type=artist&limit=15`).pipe(map(data =>{
      return data['artists'].items;
    }));
   
  }

}
