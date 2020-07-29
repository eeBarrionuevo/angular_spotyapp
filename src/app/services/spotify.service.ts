import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
   
  }

  getNewRealeases(){
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQCUa0UXlxx4wcgcoTIctTSN0HQgz-T1HhBtbUaXFyRAc8sGNF7DQq56gcCs4fQz9aj1wLYII0zGo7NFji8'
    });
    return this.http.get("https://api.spotify.com/v1/browse/new-releases", {headers});
  }

}
