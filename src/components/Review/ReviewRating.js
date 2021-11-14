import React from 'react';
import { useForm } from 'react-hook-form';
import './ReviewRating.css';

const ReviewRating = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        fetch("localhost:5000/review", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
            });
      
    };

    return (
        <div>
            <section className="" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 order-2 order-lg-1">
                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Give your Review</p>
                            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                <input defaultValue='' {...register("name")} />
                                <input placeholder="Image Link" defaultValue="" {...register("imge")} />
                                <input placeholder="Rating (0-5)" defaultValue="" {...register("numb")} />
                                <input placeholder="Description" defaultValue="" {...register("descriiption")} />
                                <input type="submit" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ReviewRating;