import React, { useEffect, useState } from 'react'
import './Card.css'
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton'
import { Link } from 'react-router-dom';

function Card({movie}) {
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
       setTimeout(()=>{
        setIsLoading(false);
       },2000)
    },[])
  return <>
     {
        isLoading 
        ?
        <div className='cards'>
           <SkeletonTheme color="#202020" heighlightColor="#444">
              <Skeleton height={300} duration={2}></Skeleton>
           </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:'none',color:'white'}}>
            <div className='cards'>
              <img className='cards_img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`}/>
            <div className='cards_overlay'>
                <div className='cards_title'>{movie?movie.original_title:""}</div>
                <div className='cards_runtime'>
                    {movie?movie.original_date:""}
                <span className='cards_rating'>{movie?movie.vote_average:""}<i className='fas fa-start'/></span>
                </div>
                <div className='cards_description'>{movie ? movie.overview.slice(0,118) + ".." :""}</div>
            </div>
            </div>
        </Link>
     }
  </>
}

export default Card
