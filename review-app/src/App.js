import './App.css';
import React, { useState, useEffect } from "react"; 

function App() {

//   const reviews = [
//     {
//       id: 1,
//       reviewer: "Joe Blogs",
//       media_type: "Video Game",
//       media_name: "Sid Meiers Civilisation 6",
//       media_art: "https://image.api.playstation.com/vulcan/img/cfn/11307KFcs3gBlcheONy-ZOYZ5kplFnq5jXinUSI8HkCc8P2gdI1_32JrKJ-vxns32LjXBcQteG2EOwuzWS_KXqE5VCYFmS4Z.png",
//       ranking: 10,
//       description: "game slays",
//       review_timestamp: "2024-08-14",
//       likes: 30
//   },
//   {
//       id: 2,
//       reviewer: "Joe Blogs",
//       media_type: "Video Game",
//       media_name: "Stardew Valley",
//       media_art: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
//       ranking: 10,
//       description: "boysack within angus",
//       review_timestamp: "2024-08-14",
//       likes: 24
//   },
//   {
//       id: 3,
//       reviewer: "Joe Blogs",
//       media_type: "Video Game",
//       media_name: "Grand Theft Auto 5",
//       media_art: "https://media.rockstargames.com/rockstargames/img/global/news/upload/actual_1364906194.jpg",
//       ranking: 10,
//       description: ":)",
//       review_timestamp: "2024-08-14",
//       likes: 24
//   },
//   {
//     id: 4,
//     reviewer: "Joe Blogs",
//     media_type: "Video Game",
//     media_name: "Baldurs Gate 3",
//     media_art: "https://preview.redd.it/new-game-cover-from-larians-website-v0-m2lmw222h0ka1.png?auto=webp&s=ba904ad42906960a96a70ce1c27ee6d3ff5edead",
//     ranking: 10,
//     description: "red lady",
//     review_timestamp: "2024-08-14",
//     likes: 10
//   }
  
// ]



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
          <img className='review-image' src={props.header_image} />
          <div className='review-information'>
            <div className='like-info'>
              <img onClick={handleLike} className='like-button' src='https://static.vecteezy.com/system/resources/previews/021/013/524/original/like-icon-on-transparent-background-free-png.png' />     
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
