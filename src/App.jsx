import Header from "./Components/Header/Header"
import MovieCard from "./Components/MovieCard/MovieCard"

function App() {

  return (
    <>
      <Header />
      <MovieCard image='./assets/images/TrumanShow.webp' rating={9.9}/>
    </>
  )
}

export default App
