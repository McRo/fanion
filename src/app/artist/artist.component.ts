import { Artist } from '../models/Artist.model'
import { ArtistsService } from '../services/artists.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  artist: Artist;

  constructor(private artistsService: ArtistsService,
              ) { }

  ngOnInit(): void {
    this.artist = this.artistsService.getRandomArtist()
  }



}
