import './App.css';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom';
import Header from './component/Header/Header'
import Home from './component/pages/Home/Home';
import MovieList from './component/movieList/MovieList';
import MovieDetails from './component/pages/movieDetails/MovieDetails';

function App() {
  return (
    <div className="App">
        <Router>
           <Header/>
            <Routes>
               <Route index element={<Home/>}></Route>
               <Route path='movie/:id' element={<MovieDetails/>}>Movies Detais Page</Route>
               <Route path='movies/:type' element={<MovieList/>}></Route>
               <Route path='/' element={<h1>Error Msg</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
