import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleService.css';

const SingleService = (props) => {
    const { name, imge, description, price } = props.service || {};

    return (
        <>
            <div className="home-service">
                <div >
                    <img src={imge} alt=" " />
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <h2>{price} </h2>
                    <div>
                        <Link to='/orderReview'>
                            <Button className="btn-sm btn btn-warning" onClick={() => props.handleAddToCart(props.service)}>Purchase</Button>
                        </Link>

                    </div>
                </div>
            </div>

        </>
    );
};

export default SingleService;