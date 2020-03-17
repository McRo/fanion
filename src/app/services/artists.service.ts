import { Injectable } from '@angular/core';
import { Artist } from '../models/Artist.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor() { }

  artists: Artist[] = [
    {
      id:733,
      user: new User("awarol","andy", "wharol"), // "https://api.lefresnoy.net/v2/people/user/696", // User<User>,
      nickname: "AWAR",
      bio_short_fr: "bio short fr",
      bio_short_en:  "bio short en",
      bio_fr:  "bio long fr",
      bio_en: "bio long en",
      twitter_account: "twitter account",
      facebook_profile: " fb prfile ",
      websites: [],
    },
  ]


  getSingleArtist(id: number) {
    const artist = this.artists.find(
      (artistObject) => {
        return artistObject.id === id;
      }
    )
    return artist;
  }

  getRandomArtist() {
    let random:number = Math.floor(Math.random() * this.artists.length);
    console.log(this.artists)
    console.log(this.artists[random])
    return this.getSingleArtist(this.artists[random].id);
  }


}
