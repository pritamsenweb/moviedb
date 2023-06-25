import React from 'react'
import MovieCard from '../component/MovieCard';
import styles from '@/app/styles/common.module.css';

const Movie = async () => {


  const url = process.env.RAPID_KEY;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '82debe71b5msh9f477abad824dbdp108bd2jsn608c61951f24',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movies</h1>
          <div className={styles.card_section}>
          {
            main_data.map((currElm) => {
              return <MovieCard key={currElm.id} {...currElm} />
            }
            )
          }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movie