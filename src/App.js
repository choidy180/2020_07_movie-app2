import React from 'react';
import PropTypes from "prop-types";

function Drama({ name, poster, rating }) {
  return (
    <div>
      <img src={poster} alt={name}/>
      <h1>{name}</h1>
      <h4>{rating}/5</h4>
    </div>
  )
}

Drama.prototype = {
  name: PropTypes.string,
  poster: PropTypes.string,
  rating: PropTypes.number
}

const Drama_Tvn = [
  {
    id: 1,
    name: "나의 아저씨",
    poster: "http://cfile296.uf.daum.net/image/999C573F5AFDC02E07B887",
    rating: 5
  },
  {
    id: 2,
    name: "비밀의 숲",
    poster: "http://cfile249.uf.daum.net/image/25EF5C33597EEFE432FB4A",
    rating: 4.7
  },
  {
    id: 3,
    name: "도깨비",
    poster: "http://cfile251.uf.daum.net/image/2732BF4F589876DD266788",
  },
  {
    id: 4,
    name: "인간수업",
    poster: "http://t1.daumcdn.net/cafeattach/mEr9/abaffb775038e54e9b7aabc0a2357110d57530d4",
    rating: "4.9"
  }
]

function App() {
  return (
    <div>
      {Drama_Tvn.map(content => (
        <Drama
          key={content.id}
          name={content.name}
          poster={content.poster}
          rating={content.rating}
        />
      ))}
    </div>
  );
}

export default App;
