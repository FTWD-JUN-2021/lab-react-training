import React from 'react'
import Rating from './Rating'

export default function DriverCard({name, rating, img, car}) {
    return (
        <div>
            <img src = {img} style={{width:"6vw"}}/>
            <div>
                <h2>{name}</h2>
                <p>
                   <Rating>{rating}</Rating>
                </p>
                <p>
                    {car.model} {car.licensePlate}
                </p>
            </div>
        </div>
    )
}
