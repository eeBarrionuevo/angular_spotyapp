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
  loading: boolean;

  constructor(private spotifyService: SpotifyService) {
      this.loading = true;
      this.spotifyService.getNewRealeases().subscribe((data:any) =>{
        this.newSongs = data
        this.loading = false;
      });

  }

  ngOnInit(): void {
  }


}
