import type { Movie, GalleryImage, SocialLink } from "@/types";

export const COMPANY_INFO = {
  name: "Rudra Creations",
  tagline: "Crafting Stories that Inspire",
  founder: "T Leela Gowtham Varma",
  location: "Manikonda, Hyderabad, Telangana, India",
  whatsapp: "+91 7995177703",
  phone: "+91 7995177703",
  email: "rudracreations09@gmail.com",
  instagram: "https://www.instagram.com/varma_gowtham/",
  facebook: "https://www.facebook.com/share/1B7gHsLbeB/?mibextid=wwXIfr",
  founded: "2018",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.8!2d78.3897!3d17.4042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97e6b9c6fe8b%3A0xa9023891a3527c9f!2sManikonda%2C%20Hyderabad%2C%20Telangana%20500089!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
};

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "Kali",
    year: "2024",
    genre: "Psychological Thriller",
    description:
      "Sivaram who is a loser of the choices he made in his life and decides to end his life. A mysterious man comes to the house and corner him to play the game of Othello which reveals the facts of life.",
    director: "Siva Sashu",
    producer: "T Leela Gowtham Varma",
    story: "Siva Sashu",
    screenplay: "Nishanth Katari, Ramana Jagarlamudi",
    cast: "Naresh Agastya, Prince Cecil, Neha Krishna",
    poster:
      "https://res.cloudinary.com/dhy0cx167/image/upload/v1778429607/kali_gmitzt.jpg",
    youtubeId: "D6QipMemG5M",
    status: "released",
    language: "Telugu",
  },
  // {
  //   id: 2,
  //   title: "Kaliyuga",
  //   year: "2023",
  //   genre: "Thriller / Mystery",
  //   description:
  //     "In a city where corruption bleeds into every corner, one honest inspector unravels a web of dark secrets that threatens to consume him. A neo-noir Telugu thriller that redefines suspense.",
  //   director: "T Leela Gowtham Varma",
  //   cast: "Anand Raj, Meera Nair, Siddharth",
  //   poster:
  //     "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=400&h=600&fit=crop&auto=format",
  //   youtubeId: "dQw4w9WgXcQ",
  //   status: "released",
  //   language: "Telugu",
  // },
  // {
  //   id: 3,
  //   title: "Nuvvu Nenu",
  //   year: "2023",
  //   genre: "Romance / Drama",
  //   description:
  //     "A soul-stirring love story set against the golden backdrop of Hyderabad. Two hearts, separated by destiny, find their way back through the language of music and sacrifice.",
  //   director: "T Leela Gowtham Varma",
  //   cast: "Karthik, Ananya Reddy, Naveen",
  //   poster:
  //     "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400&h=600&fit=crop&auto=format",
  //   youtubeId: "dQw4w9WgXcQ",
  //   status: "released",
  //   language: "Telugu",
  // },
  // {
  //   id: 4,
  //   title: "Rudra",
  //   year: "2024",
  //   genre: "Epic / Action",
  //   description:
  //     "The flagship film of Rudra Creations. A mythological epic retold in modern times — when an ancient warrior's spirit is reborn in today's Hyderabad to battle forces that defy nature itself.",
  //   director: "T Leela Gowtham Varma",
  //   cast: "Mahesh Kumar, Deepika, Sameer Khan",
  //   poster:
  //     "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop&auto=format",
  //   youtubeId: "dQw4w9WgXcQ",
  //   status: "released",
  //   language: "Telugu",
  // },
  // {
  //   id: 5,
  //   title: "Veera",
  //   year: "2024",
  //   genre: "Action / Patriotism",
  //   description:
  //     "A tribute to the unsung heroes of our nation. Veera follows a decorated soldier's battle — not just on the border, but in the corridors of power where true courage is tested.",
  //   director: "T Leela Gowtham Varma",
  //   cast: "Arjun Reddy, Kavya Menon, Rajesh",
  //   poster:
  //     "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&h=600&fit=crop&auto=format",
  //   youtubeId: "dQw4w9WgXcQ",
  //   status: "released",
  //   language: "Telugu",
  // },
  // {
  //   id: 6,
  //   title: "Prema Kavitha",
  //   year: "2021",
  //   genre: "Romance / Musical",
  //   description:
  //     "A poetic journey through love and loss, told through the melodies of a struggling composer who finds inspiration in the muse he cannot have. A musical odyssey unlike any other.",
  //   director: "T Leela Gowtham Varma",
  //   cast: "Sai Ram, Pooja Hegde, Suresh",
  //   poster:
  //     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop&auto=format",
  //   youtubeId: "dQw4w9WgXcQ",
  //   status: "released",
  //   language: "Telugu",
  // },
];

export const UPCOMING_MOVIES: Movie[] = [
  {
    id: 101,
    title: "Shakti — Rise of the Phoenix",
    year: "2025",
    genre: "Action / Mythology",
    description:
      "An untold legend resurfaces. When the city of Hyderabad is threatened by a supernatural force, only the chosen one can awaken the ancient Shakti within. A mega-budget spectacle unlike anything Telugu cinema has seen.",
    director: "Siva Sashu",
    cast: "TBA",
    poster:
      "https://res.cloudinary.com/dhy0cx167/image/upload/v1778429132/WhatsApp_Image_2026-05-10_at_9.32.39_PM_moh9lk.jpg",
    youtubeId: "",
    status: "upcoming",
    language: "Telugu / Tamil / Hindi",
    producer: "",
    story: "",
    screenplay: "",
  },
  {
    id: 102,
    title: "Abaddam",
    year: "2025",
    genre: "Political Thriller",
    description:
      "In a democracy where every vote is a battle, one ordinary man's lie becomes the most powerful weapon. A biting political thriller that will leave you questioning everything you know about power.",
    director: "T Leela Gowtham Varma",
    cast: "TBA",
    poster:
      "https://res.cloudinary.com/dhy0cx167/image/upload/v1778429133/WhatsApp_Image_2026-05-10_at_9.32.38_PM_ewqyx1.jpg",
    youtubeId: "",
    status: "upcoming",
    language: "Telugu",
    producer: "",
    story: "",
    screenplay: "",
  },
  {
    id: 103,
    title: "Kala Ratri",
    year: "2026",
    genre: "Horror / Supernatural",
    description:
      "Some doors were never meant to be opened. Kala Ratri ventures into the darkest corners of Telugu folklore to deliver a supernatural horror experience that will haunt you long after the credits roll.",
    director: "T Leela Gowtham Varma",
    cast: "TBA",
    poster:
      "https://res.cloudinary.com/dhy0cx167/image/upload/v1778429417/ChatGPT_Image_May_10_2026_09_39_54_PM_actky7.png",
    youtubeId: "",
    status: "upcoming",
    language: "Telugu",
    producer: "",
    story: "",
    screenplay: "",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1585951237318-9ea5e175b891?w=600&h=400&fit=crop&auto=format",
    alt: "Behind the scenes filming",
    caption: "On Location — Agnipatha",
    span: "wide",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=500&fit=crop&auto=format",
    alt: "Camera crew at work",
    caption: "The Lens That Tells Stories",
    span: "tall",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=400&fit=crop&auto=format",
    alt: "Director on set",
    caption: "Director Gowtham — Kaliyuga Set",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=400&fit=crop&auto=format",
    alt: "Film lighting setup",
    caption: "Lighting the Darkness",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop&auto=format",
    alt: "Action sequence filming",
    caption: "Action Sequence — Veera",
    span: "wide",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=400&h=500&fit=crop&auto=format",
    alt: "Production team meeting",
    caption: "Pre-Production Planning",
    span: "tall",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=400&h=400&fit=crop&auto=format",
    alt: "Sound recording",
    caption: "Sound Studio — Rudra Creations",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&auto=format",
    alt: "Post production editing",
    caption: "Post Production Suite",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/rudracreations",
    icon: "instagram",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@rudracreations",
    icon: "youtube",
  },
];
