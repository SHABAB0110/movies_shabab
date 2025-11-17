import React from 'react'

export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <h3 className="movie-title">{movie.title}</h3>
      <p className="movie-genre">{movie.genre}</p>
      <p className="movie-why">{movie.why}</p>
    </article>
  )
}
