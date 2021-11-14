import React from 'react';
import Banner from '../Banner/Banner';
import CaroselReview from '../CaroselReview/CaroselReview';
import ServiceHome from '../Services/ServiceHome';
import Subscription from '../Subscribe/Subscription';
import './Home.css';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <div className="container my-3">
                <div className="row serviceinfo service-text">

                <h1>Our Products </h1>
                    {/* <div className="service-text col col-sm-12 ">
                        
                    </div>
                    <div className="col">

                    </div> */}

                </div>

            </div>
            <ServiceHome></ServiceHome>
            <CaroselReview></CaroselReview>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;