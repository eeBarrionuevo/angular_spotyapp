import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];

  constructor(private spotifyService: SpotifyService) {

      this.spotifyService.getNewRealeases().subscribe((data:any) =>{
        this.newSongs = data.albums.items;
        console.log(this.newSongs);
      });

  }

  ngOnInit(): void {
  }


}
