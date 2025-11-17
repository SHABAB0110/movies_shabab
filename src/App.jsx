import React from 'react'
import MovieCard from './components/MovieCard'

const movies = [
  {
    title: "The Shawshank Redemption",
    genre: "Drama",
    why: "A powerful story about hope and friendship. The performances and storytelling are timeless."
  },
  {
    title: "Inception",
    genre: "Sci-Fi / Thriller",
    why: "A mind-bending concept with exceptional direction and a haunting score. It rewards multiple viewings."
  },
  {
    title: "The Grand Budapest Hotel",
    genre: "Comedy / Drama",
    why: "Wes Anderson's visual style and quirky humor make this film endlessly charming and rewatchable."
  },
  {
    title: "Spirited Away",
    genre: "Animation / Fantasy",
    why: "A beautiful, imaginative journey with deep emotional resonance and stunning animation."
  }
]

export default function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Favorite Movies</h1>
        <p className="tagline">Movies That Inspired Me</p>
      </header>

      <section className="intro">
        <p>
          I love movies because they transport me to different worlds and perspectives.
          Good films combine storytelling, visuals, and music to create memorable experiences.
          I enjoy a variety of genres — from heartfelt dramas to inventive sci-fi and whimsical animation.
        </p>
      </section>

      <section className="movies-list">
        {movies.map((m, idx) => (
          <MovieCard key={idx} movie={m} />
        ))}
      </section>

      <aside className="preferences">
        <h2>My Movie Preferences</h2>
        <ul>
          <li><strong>Favorite genres:</strong> Drama, Sci-Fi, Animation</li>
          <li><strong>Favorite director:</strong> Christopher Nolan (one of many)</li>
          <li><strong>Watching habit:</strong> Weekly movie nights</li>
        </ul>
      </aside>

      <footer className="footer">
        <p>Made with ❤️ — Ready to push to GitHub & deploy!</p>
      </footer>
    </div>
  )
}
