export interface Album {
  id: number;
  title: string;
  upc: number;
  link: string;
  share: string;
  cover: string;
  cover_small: string;
  cover_medium: string;
  cover_big: string;
  cover_xl: string;
  md5_image: string;
  genre_id: number;
  nb_tracks: number;
  duration: number;
  release_date: string;
}

export interface Artist {
  id: number;
  link: string;
  name: string;
  nb_album: number;
  nb_fan: number;
  picture: string;
  picture_big: string;
  picture_medium: string;
  picture_small: string;
  picture_xl: string;
  radio: boolean;
  tracklist: string;
  type: string;
}

export interface Track {
  id: number;
  title: string;
  title_short: string;
  title_version: string;
  link: string;
  duration: number;
  rank: number;
  explicit_content_lyrics: number;
  explicit_content_cover: number;
  preview: string;
}

