import React, { useState } from 'react'
import Card, { Address, RestaurantInfo, Title, RestaurantImage } from './styles'
import ReactStars from "react-rating-stars-component";
import Skeleton from '../Skeleton'

function RestaurantCard({restaurant, onClick}) {
   const [imageLoaded, setImageLoaded] = useState(false)
   
   return (
         <Card onClick={onClick}>
            <RestaurantInfo>
               <Title>{restaurant.name}</Title>
               <ReactStars size={20} value={4.5} isHalf count={5} edit={false} color="#b1b1b1" />
               <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantImage
              imageLoaded={imageLoaded} 
              onLoad={()=> setImageLoaded(true)}
              src={restaurant.photos? restaurant.photos[0].getUrl(): "https://www.nationaledinercadeaukaart.nl/sites/all/files/styles/restaurant_zoekresultaat/public/restaurant/restaurantbon-restaurant-eden-valkenswaard-1.jpg"} 
              alt="Foto do Restaurante"
            />
            {!imageLoaded && <Skeleton height="90px" width="90px"/>}
         </Card>
      )
}

export default RestaurantCard