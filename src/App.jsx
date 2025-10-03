import Header from "./Components/Header/Header"
import MovieCard from "./Components/MovieCard/MovieCard"
import Title from "./Components/Title/Title"
import image from "./assets/images/TrumanShow.webp"

function App() {
  return (
    <>
      <Header />
      <Title title="Trending Now" />
      <MovieCard image={image} rating={9.9}/>
    </>
  )
}

export default App
