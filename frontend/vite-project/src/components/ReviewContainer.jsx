// ReviewContainer.jsx

import React, { useState, useEffect } from 'react';
import Review from './Review';
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"
const ReviewContainer = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Simulate fetching reviews from an API or database
    const fetchedReviews = [
      { myimg: f1, Tag: 'Awesome!', text: 'This app has saved me so much time and stress! I used to constantly forget important dates, but now I can stay on top of everything. You should test it!', name: 'John Doe', profession: 'Software Engineer' },
      { myimg: f2, Tag: 'Excellent!', text: 'Very satisfied.', name: 'Jane Doe', profession: 'Designer' },
      { myimg: f3, Tag: 'Great app!', text: 'Highly recommended for its simplicity and effectiveness.', name: 'Alice Smith', profession: 'Product Manager' },
      { myimg: f4, Tag: 'Love it!', text: 'I love using this app every day. It keeps me organized.', name: 'Bob Johnson', profession: 'Marketing Specialist' },
      // Add more reviews as needed
    ];

    // Duplicate the reviews for a continuous loop
    setReviews([...fetchedReviews, ...fetchedReviews]);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex w-max animate-scroll space-x-4"
        style={{ animationPlayState: 'running' }} // Initial state
        onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'} // Pause on hover
        onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'} // Resume when not hovering
      >
        {reviews.map((review, index) => (
          <Review
            key={index}
            myimg={review.myimg}
            Tag={review.Tag}
            text={review.text}
            name={review.name}
            profession={review.profession}
          />
        ))}
      </div>
    </div>
  );
};

export default ReviewContainer;
