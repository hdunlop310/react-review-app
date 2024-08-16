import './App.css';
import React, { useState, useEffect } from "react"; 
import axios from 'axios';

function App() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/get_data')
    .then(response => {
      setReviews(response.data);
    })  
    .catch(error => {
      console.error(error);
      });
  }, []);


  return (
    <ReviewList reviews={reviews}/>
  );
}

function Review(props) {

  function handleLike(){
    console.log(props.likes)
    props.onLike(props.game_id)
  }

  return (
    <div className='review'>      
      <div className='review-container'>
          <img alt="header for game" className='review-image' src={props.header_image} />
          <div className='review-information'>
            <div className='like-info'>
              <img alt="like button" onClick={handleLike} className='like-button' src='https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png' />     
              {props.likes}       
            </div>
            <div className='details'>
            <p><b><i>{props.game_name}</i></b></p>
            <p>{props.playtime}</p>
            <p>{props.achievement_percentage}</p>
            <p>{props.developers}</p>
            <p>{props.publishers}</p>
            <p>{props.age_rating}</p>
            <div className='review-description'>
              <p><i>"{props.description}"</i></p>
              </div>
            </div>
          </div>
       </div>
    </div>
  )
}

function ReviewList(props) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setReviews(props.reviews);
  }, []);

  function handleReviewLike(reviewId) {
    const nextReviews = reviews.map((review) => {
      if (review.game_id === reviewId) {
        review.likes = review.likes + 1
        return review
      } else {
        return review;
      }
    });

    setReviews(nextReviews);
  }

  
  const review = props.reviews.map((review) => (
      <Review 
        game_id={review.game_id}      
        header_image={review.header_image}
        game_name={review.game_name}
        developers={"Developers: " + review.developers}
        publishers={"Publishers: " + review.publishers}
        age_rating={"PEGI: " + review.age_rating}
        description={review.description}
        likes={review.likes}
        playtime={"Playtime: " + review.playtime + " hours"}
        achievement_percentage={"Achievements Completed: " + review.achievement_percentage + "%"}
        onLike={handleReviewLike}
      />
  ))
  return <div> <h1>Steam Data App</h1> {review} </div>
}

export default App;
