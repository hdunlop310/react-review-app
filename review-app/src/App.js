import logo from './logo.svg';
import './App.css';

function App() {

  const reviews = [
    {
      id: 1,
      reviewer: "Joe Blogs",
      media_type: "Video Game",
      media_name: "Sid Meiers Civilisation 6",
      media_art: "https://image.api.playstation.com/vulcan/img/cfn/11307KFcs3gBlcheONy-ZOYZ5kplFnq5jXinUSI8HkCc8P2gdI1_32JrKJ-vxns32LjXBcQteG2EOwuzWS_KXqE5VCYFmS4Z.png",
      ranking: 10,
      description: "game slays",
      review_timestamp: "2024-08-14"
  },
  {
      id: 2,
      reviewer: "Joe Blogs",
      media_type: "Video Game",
      media_name: "Stardew Valley",
      media_art: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
      ranking: 10,
      description: "boysack within angus",
      review_timestamp: "2024-08-14"    
  }
  
]

  return (
    <ReviewList reviews={reviews}/>
  );
}

function Review(props) {
  return (
    <div className='review'>
      <div className='review-container'>
          <img className='review-image' src={props.media_art} />
          <div className='review-information'>
            <p><b><i>{props.media_name}</i></b></p>
            <p>{props.reviewer}</p>
            <p>{props.ranking}</p>
            <div className='review-description'>
              <p><i>"{props.description}"</i></p>
            </div>
          </div>
       </div>
    </div>
  )
}

function ReviewList(props) {
  const review = props.reviews.map((review) => (


      <Review 
        media_art={review.media_art}
        media_name={review.media_name}
        reviewer={"Reviewer: " + review.reviewer}
        ranking={"Ranking: " + review.ranking}
        description={review.description}
      />
  ))
  return <div> <h1>Review App</h1> {review} </div>
}

export default App;
