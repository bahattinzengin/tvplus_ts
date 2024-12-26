import { BrowserRouter ,Routes,Route} from "react-router-dom"
import MainPage from "./pages/MainPage"
import Header from "./components/Header"
import DetailPage from "./pages/DetailPage"
import MyFavoriteMovies from "./pages/MyFavoriteMovies"
import TopRated from "./pages/TopRated"
import TrendingPage from "./pages/TrendingPage"
import Populer from "./pages/Populer"
import QueryPage from "./pages/QueryPage"

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
      <Route path="/favorite" element={<MyFavoriteMovies/>}/>
      <Route path="/rated" element={<TopRated/>}/>
      <Route path="/trending" element={<TrendingPage/>}/>
      <Route path="/populer" element={<Populer/>}/>
      <Route path="/query" element={<QueryPage/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App