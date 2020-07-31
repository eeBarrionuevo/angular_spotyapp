import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { partitionArray } from '@angular/compiler/src/util';
import { SpotifyService } from 'src/app/services/spotify.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
 

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) { 
    this.loading = true;
    this.router.params.subscribe(parms =>{
      this.getArtist(parms.id);
      this.getTopTracksArtist(parms.id);
    });

  }

  ngOnInit(): void {
  }

  getArtist( id: string){
    this.loading = true;
    this.spotifyService.getArtist(id).subscribe((response)=>{
      this.artist = response;
      this.loading = false;
    
    });
  }

  getTopTracksArtist( id: string ){
    this.spotifyService.getTopTracksArtist(id).subscribe((response)=>{
      this.topTracks = response;
      console.log(this.topTracks);
    });
  }
  




}
