export class Profile {
  public id: number;
  public photo: string;
  public gender: string;
  public cursus: string;
  public nationality: string;
  public birthdate: string;
  public birthplace: string;
  public birthplace_country: string;
  public mother_tongue: string;
  public other_language: string;
  public homeland_country: string;
  public homeland_address: string;
  public homeland_zipcode: string;
  public homeland_town: string;
  public homeland_phone: string;
  public residence_phone: string;
  public residence_zipcode: string;
  public residence_address: string;
  public residence_town: string;
  public social_insurance_number: string;
  public family_status: string;
  constructor() {}
}

export class User {
  public id: number;
  public url: number;
  public is_superuser: boolean;
  public email: string;
  public profile: Profile;
  constructor(public username: string,
              public first_name: string,
              public last_name: string,
             ) {}
}
