import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css"

function Movie({ id, year, title, summary, rating, poster, genres }) {
    return (
        <div className="movie">
            {/* 포스터 */}
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                {/* 제목 */}
                <h3 className="movie__title">{title}</h3>
                {/* 연도 */}
                <h5 className="movie__year">{year}</h5>
                {/* 장르 */}
                <ul className="genres">
                    {genres.map((genre, index) => (
                        <li key={index} className="genres__genres">{genre}</li>
                    ))}
                </ul>
                {/* 평점 */}
                <h4 className="movie__rating">{rating}/10</h4>
                {/* 요약글, 140자까지만 출력 */}
                <p className="movie__summary">{summary.slice(0, 140)}...</p>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;
