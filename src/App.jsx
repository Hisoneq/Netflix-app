import Header from "./Components/Header/Header"
import Title from "./Components/Title/Title"
import MovieSlider from "./Components/MovieSlider/MovieSlider"
import ReasonsCardSet from "./Components/ReasonsCardSet/ReasonsCardSet"
import FAQGroup from "./Components/FAQGroup/FAQGroup"
import Footer from "./Components/Footer/Footer"

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

import Dekstop from "./assets/images/Dekstop.png"
import Download from "./assets/images/Download.png"
import Telescope from "./assets/images/Telescope.webp"
import HappyBox from "./assets/images/HappyBox.png"


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

  const reasonsCards = [
    { title: "Enjoy on your TV", description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.", image: Dekstop },
    { title: "Download your shows to watch offline", description: "Save your favorites easily and always have something to watch.", image: Download },
    { title: "Watch everywhere", description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", image: Telescope },
    { title: "Create profiles for kids", description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.", image: HappyBox },
  ];

  const FAQs = [
    { title: "What is Netflix?", description: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"},
    { title: "How mutch does Netflix cost?", description: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 7.99 to EUR 11.99 a month. No extra costs, no contracts."},
    { title: "Where can I watch?", description: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favorite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."},
    { title: "How do I cancel?", description: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."},
    { title: "What can I watch on Netflix?", description: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."},
    { title: "Is Netflix good for kids?", description: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."},
    { title: "Why am I seen this language?", description: "Your browser preferences determine the language shown here."},
  ];

  

  return (
    <>
      <Header />
      <Title title="Trending Now" />
      <MovieSlider movies={movies} />
      <Title title="More Reasons to Join" />
      <ReasonsCardSet reasonsCards={reasonsCards} />
      <Title title="Frequently Asked Questions"/>
      <FAQGroup faqs={FAQs} />
      <Footer />
    </>
  )
}

export default App
