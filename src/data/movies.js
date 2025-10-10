import TrumanShow from "../assets/images/TrumanShow.webp"        
import Inception from "../assets/images/Inception.jpg"          
import TheDarkKnight from "../assets/images/TheDarkKnight.jpg"   
import Interstellar from "../assets/images/Interstellar.jpg"     
import PulpFiction from "../assets/images/PulpFiction.jpg"      
import TheMatrix from "../assets/images/TheMatrix.png"          
import ForrestGump from "../assets/images/ForrestGump.jpg"       
import TheShawshankRedemption from "../assets/images/TheShawshankRedemption.jpg" 
import Goodfellas from "../assets/images/Goodfellas.jpg"         
import TheGodfather from "../assets/images/TheGodfather.jpg"    

export const MOVIES_DATA = [
  { 
    id: 1, 
    image: TrumanShow, 
    rating: 9.9, 
    titleKey: 'movies.trumanShow',
    year: 1998,
    duration: 103,
    genreKeys: ["genres.drama", "genres.comedy", "genres.sciFi"],
    director: {
      en: "Peter Weir",
      ru: "Питер Уир"
    },
    descriptionKey: 'movies.trumanShow.description'
  },
  { 
    id: 2, 
    image: Inception, 
    rating: 8.5, 
    titleKey: 'movies.inception',
    year: 2010,
    duration: 148,
    genreKeys: ["genres.action", "genres.sciFi", "genres.thriller"],
    director: {
      en: "Christopher Nolan",
      ru: "Кристофер Нолан"
    },
    descriptionKey: 'movies.inception.description'
  },
  { 
    id: 3, 
    image: TheDarkKnight, 
    rating: 9.2, 
    titleKey: 'movies.darkKnight',
    year: 2008,
    duration: 152,
    genreKeys: ["genres.action", "genres.crime", "genres.drama"],
    director: {
      en: "Christopher Nolan",
      ru: "Кристофер Нолан"
    },
    descriptionKey: 'movies.darkKnight.description'
  },
  { 
    id: 4, 
    image: Interstellar, 
    rating: 8.8, 
    titleKey: 'movies.interstellar',
    year: 2014,
    duration: 169,
    genreKeys: ["genres.adventure", "genres.drama", "genres.sciFi"],
    director: {
      en: "Christopher Nolan",
      ru: "Кристофер Нолан"
    },
    descriptionKey: 'movies.interstellar.description'
  },
  { 
    id: 5, 
    image: PulpFiction, 
    rating: 9.1, 
    titleKey: 'movies.pulpFiction',
    year: 1994,
    duration: 154,
    genreKeys: ["genres.crime", "genres.drama"],
    director: {
      en: "Quentin Tarantino",
      ru: "Квентин Тарантино"
    },
    descriptionKey: 'movies.pulpFiction.description'
  },
  { 
    id: 6, 
    image: TheMatrix, 
    rating: 8.7, 
    titleKey: 'movies.matrix',
    year: 1999,
    duration: 136,
    genreKeys: ["genres.action", "genres.sciFi"],
    director: {
      en: "Lana Wachowski, Lilly Wachowski",
      ru: "Лана Вачовски, Лилли Вачовски"
    },
    descriptionKey: 'movies.matrix.description'
  },
  { 
    id: 7, 
    image: ForrestGump, 
    rating: 9.0, 
    titleKey: 'movies.forrestGump',
    year: 1994,
    duration: 142,
    genreKeys: ["genres.drama", "genres.romance"],
    director: {
      en: "Robert Zemeckis",
      ru: "Роберт Земекис"
    },
    descriptionKey: 'movies.forrestGump.description'
  },
  { 
    id: 8, 
    image: TheShawshankRedemption, 
    rating: 8.9, 
    titleKey: 'movies.shawshank',
    year: 1994,
    duration: 142,
    genreKeys: ["genres.drama"],
    director: {
      en: "Frank Darabont",
      ru: "Фрэнк Дарабонт"
    },
    descriptionKey: 'movies.shawshank.description'
  },
  { 
    id: 9, 
    image: Goodfellas, 
    rating: 8.6, 
    titleKey: 'movies.goodfellas',
    year: 1990,
    duration: 145,
    genreKeys: ["genres.biography", "genres.crime", "genres.drama"],
    director: {
      en: "Martin Scorsese",
      ru: "Мартин Скорсезе"
    },
    descriptionKey: 'movies.goodfellas.description'
  },
  { 
    id: 10, 
    image: TheGodfather, 
    rating: 9.3, 
    titleKey: 'movies.godfather',
    year: 1972,
    duration: 175,
    genreKeys: ["genres.crime", "genres.drama"],
    director: {
      en: "Francis Ford Coppola",
      ru: "Фрэнсис Форд Коппола"
    },
    descriptionKey: 'movies.godfather.description'
  }
];

