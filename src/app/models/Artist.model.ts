import { User } from './User.model';

export class Artist {

  constructor(public id: number,
              public user: User,
              public nickname: string,
              public bio_short_fr: string,
              public bio_short_en: string,
              public bio_fr: string,
              public bio_en: string,
              public twitter_account: string,
              public facebook_profile: string,
              public websites: Array<string>,
             ) {}


}
