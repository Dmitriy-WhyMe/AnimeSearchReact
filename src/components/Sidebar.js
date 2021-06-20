import React from 'react'

function Sidebar({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top 10 Anime</h3>
                <div className="nav-wrapper">
                    {topAnime.map(anime => (
                        <a href={anime.url} target="_blank" rel="noreferrer" key={anime.mal_id}>{anime.title}</a>
                    ))}
                </div>
            </nav>
        </aside>
    )
}

export default Sidebar
