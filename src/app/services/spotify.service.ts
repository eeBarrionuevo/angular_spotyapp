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
      'Authorization':'Bearer BQB9_NLkJ3Fmtvr4CfCkzGPpK7IX8yqP25FVpCZnQKILnFImq5xMckcAs9nfS7Bbu0qOgxQTVB4645A3X_A'
    });
    return this.http.get(url, { headers });
  }

  getNewRealeases(){

    return this.getQuery("browse/new-releases").pipe(map(data =>{
      return data['albums'].items;
    }));
     
  }

  getArtists(strSearch: string){
    return this.getQuery(`search?q=${strSearch}&type=artist&limit=15`).pipe(map(data =>{
      return data['artists'].items;
    }));
   
  }

  getArtist(artistId: string){
    return this.getQuery(`artists/${artistId}`);
  }

  getTopTracksArtist(artistId: string){
    return this.getQuery(`artists/${artistId}/top-tracks?country=us`).pipe(map(data =>{
      return data['tracks'];
    }));;
  }

}
