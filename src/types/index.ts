export interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  description: string;
  director: string;
  cast: string;
  poster: string;
  youtubeId: string;
  status: "released" | "upcoming";
  language: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
  span?: "normal" | "wide" | "tall";
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
