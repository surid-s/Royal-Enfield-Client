import React, { useEffect, useState } from "react";
import './CaroselReviews.css';
import Carousel from 'react-material-ui-carousel'
import { CardMedia } from '@mui/material'
import reviewImg from '../../images/review.jpg';
const CaroselReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <Carousel>
            {
                reviews.map((review) =>
                    <div className='container'>
                        <div className="my-5 review-text">
                            <h2>Clients With
                                Reason To Smile <i className="far fa-smile smile"></i></h2>
                        </div>
                        <div className='review-container row p-2'>
                            <div className='single-review col-md-6 col-sm-12' >
                                <CardMedia
                                    component="img"
                                    style={{ width: '150px', height: '150px', margin: 'auto' }}
                                    image={review.img}
                                    alt="User Avatar"
                                />
                                <h3>{review.name}</h3>
                                <p>{review.description}</p>
                            </div>
                            <div className='col-md-6 col-sm-12'>
                                <img className='img-fluid' src={reviewImg} alt="" />
                            </div>
                        </div>
                    </div>
                )
            }
        </Carousel>
    );

};

export default CaroselReview;
