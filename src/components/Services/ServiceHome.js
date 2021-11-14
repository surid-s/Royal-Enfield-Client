import React from 'react';
import SingleService from '../Service/SingleService';
import { useEffect, useState } from 'react';
import './ServiceHome.css';
import { addToDb } from '../../utilities/fakedb';
import useCart from '../../hooks/useCart';
// import { Spinner } from 'react-bootstrap';

const ServiceHome = () => {
    const [services, setServices] = useState([]);
    const [cart, setCart] = useCart();
    useEffect(() => {
        fetch("localhost:5000/products")
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);
        let newCart = [];
        if (exists && cart.length > 1) {
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, product];
        } else {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDb(product.key);
    }
    return (
        <div className="home-service-container">
            {
                services.map(service =>
                    <SingleService
                        key={service._id}
                        service={service}
                        handleAddToCart={handleAddToCart}
                    >
                    </SingleService>
                )
            }
        </div>
    );
};

export default ServiceHome;

