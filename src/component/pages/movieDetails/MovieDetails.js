import React, { useEffect, useState } from 'react'
import './MovieDetails.css';
import { useParams} from 'react-router-dom';

function MovieDetails() {
     const [currentMovieDetails,setMovieDetails] = useState();
     const {id} = useParams();

     useEffect(()=>{
       getData();
       window.scrollTo(0,0);
     },[]);

     
     const getData = () =>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>setMovieDetails(data));
    }

  return (
    <div className='movie'>
       <div className='movie_intro'>
           <img className='movie-backdrops' src={`https://image.tmdb.org/t/p/original${currentMovieDetails ? currentMovieDetails.backdrop_path : ""}`}/>
       </div>
       <div className='movie_details'>
           <div className='movie_detailleft'>
               <div className='movie_posterBox'>
                 <img className='movie_poster' src={`https://image.tmdb.org/t/p/original${currentMovieDetails ? currentMovieDetails.poster_path : ""}`}/>
               </div>
           </div>
           <div className='movie_deltailright'>
              <div className='movie_detailRightTop'>
                 <div className='movie_name'>{currentMovieDetails ? <h1>{currentMovieDetails.original_title}</h1>:""}</div>
                  <div className="movie_tagline">{currentMovieDetails ? currentMovieDetails.tagline : ""}</div>
                 <div className='movie_rating'>
                    {currentMovieDetails ? currentMovieDetails.vote_average:""} <i className='fas fa-star' />
                    <span className='movie_voteCount'>{currentMovieDetails ? "(" +currentMovieDetails.vote_count + ") votes":""}</span>
                 </div>
                 <div className='movie_runtime'>{currentMovieDetails ? currentMovieDetails.runtime + "mins":""}</div>
                 <div className='movie_releaseDate'>{currentMovieDetails ? "Release Date :" + currentMovieDetails.release_date : ""}</div>

                 <div className='movie_genres'>
                    {
                        currentMovieDetails && currentMovieDetails.genres ?
                        currentMovieDetails.genres.map(genere=>(
                            <>
                            <span className='movie_genre' id={genere.id}>{genere.name}</span>
                            </>
                        ))
                        : ""
                    }
                 </div>
              </div>
              <div className='movie_detaiRightBottom'>
                  <div className='synopsisText'>Synopsis</div>
                  <div className='synopsisoftext'>{currentMovieDetails?currentMovieDetails.overview:""}</div>
              </div>
              <div className='movie_links'>
                 <div className='movie_heading'>Useful Links</div>
                 {
                    currentMovieDetails&& currentMovieDetails.homepage && <a href={currentMovieDetails.homepage}  target="_blank" style={{textDecoration: "none"}}><p><span className="movie__homeButton movie__Button">Homepage <i className="newTab fas fa-external-link-alt"></i></span></p></a>
                 }
                 {
                    currentMovieDetails && currentMovieDetails.imdb_id && <a href={"https://www.imdb.com/title/" + currentMovieDetails.imdb_id} target="_blank" style={{textDecoration: "none"}}><p><span className="movie__imdbButton movie__Button">IMDb<i className="newTab fas fa-external-link-alt"></i></span></p></a>
                }
              </div>
              {/* <div className='movie_headings'>
                Production Companies
              </div>
              <div className='movie_production'>
                {
                    currentMovieDetails && currentMovieDetails.production_companies && currentMovieDetails.production_companies.map(company=>(
                        <>
                         {
                            company.logo_path
                            && 
                            <span className='productionCompanyImage'>
                                <img className='movie_productionCompany' src={"https://image.tmdb.org/t/p/original" + company.logo_path}/>
                                <span className='comapany_name'>{company.name}</span>
                            </span>
                         }
                        </>
                    ))
                }
              </div> */}
           </div>
       </div>
    </div>
  )
}

export default MovieDetails
