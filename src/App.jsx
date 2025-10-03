import Header from "./Components/Header/Header"
import Title from "./Components/Title/Title"
import MovieSlider from "./Components/MovieSlider/MovieSlider"

import TrumanShow from "./assets/images/TrumanShow.webp"        
import Inception from "./assets/images/Inception.jpg"          
import TheDarkKnight from "./assets/images/TheDarkKnight.jpg"   
import Interstellar from "./assets/images/Interstellar.jpg"     
import PulpFiction from "./assets/images/PulpFiction.jpg"      
import TheMatrix from "./assets/images/TheMatrix.png"          
import ForrestGump from "./assets/images/ForrestGump.jpg"       
import TheShawshankRedemption from "./assets/images/TheShawshankRedemption.jpg" 
import Goodfellas from "./assets/images/Goodfellas.jpg"         
import TheGodfather from "./assets/images/TheGodfather.jpg"     


function App() {

  const movies = [
    { id: 1, image: TrumanShow, rating: 9.9, title: "The Truman Show" },
    { id: 2, image: Inception, rating: 8.5, title: "Inception" },
    { id: 3, image: TheDarkKnight, rating: 9.2, title: "The Dark Knight" },
    { id: 4, image: Interstellar, rating: 8.8, title: "Interstellar" },
    { id: 5, image: PulpFiction, rating: 9.1, title: "Pulp Fiction" },
    { id: 6, image: TheMatrix, rating: 8.7, title: "The Matrix" },
    { id: 7, image: ForrestGump, rating: 9.0, title: "Forrest Gump" },
    { id: 8, image: TheShawshankRedemption, rating: 8.9, title: "The Shawshank Redemption" },
    { id: 9, image: Goodfellas, rating: 8.6, title: "Goodfellas" },
    { id: 10, image: TheGodfather, rating: 9.3, title: "The Godfather" }
  ];

  return (
    <>
      <Header />
      <Title title="Trending Now" />
      <MovieSlider movies={movies} />
      <Title title="More Reasons to Join" />
    </>
  )
}

export default App
