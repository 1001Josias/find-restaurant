import React, { useState } from 'react'
import PageDefault from '../PageDefault'
import Container, { Search, Logo, IconStyle, Wrapper, Carousel, CarouselTitle, ModalTitle, ModalContent } from './styles'
import Map from '../../components/Map'
import SearchIcon from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import Slider from "react-slick";
import ImageCard from '../../components/ImageCard'
import RestaurantCard from '../../components/RestaurantCard'
import Modal from '../../components/Modal'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import Skeleton from '../../components/Skeleton'

function Home() {
   const photoDefault = 'https://www.nationaledinercadeaukaart.nl/sites/all/files/styles/restaurant_zoekresultaat/public/restaurant/restaurantbon-restaurant-eden-valkenswaard-1.jpg'
   const { restaurants, restaurantSelected } = useSelector(({restaurants}) => restaurants)
   const [placeId, setPlaceId] = useState(null)
   const [inputValue, setinputValue] = useState('')
   const [query, setQuery] = useState('')
   const [modalOpened, setModalOpened] = useState(false)

   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      adaptiveHeight: true,
   };

   function handleKeyPress(e){
      if(e.key === 'Enter'){
         setQuery(inputValue)
      }
   }

   function handleClickModal(placeId){
      setPlaceId(placeId)
      setModalOpened(true)
   }

   return (
      <PageDefault title="Home">
         <Wrapper>
            <Container>
               <Search>
                  <Logo>Find Restaurant</Logo>
                  <TextField
                     id="input-with-icon-textfield"
                     label="Buscar Restaurante"
                     variant="outlined"
                     onKeyPress={handleKeyPress}
                     onChange={(event) => setinputValue(event.target.value)}
                     InputProps={{
                        endAdornment: (
                           <InputAdornment position="end">
                              <IconStyle>
                                 <SearchIcon />
                              </IconStyle>
                           </InputAdornment>
                        ),
                     }}
                  />
                  {restaurants.length > 0 ? (
                  <>
                     <CarouselTitle>Perto de Mim</CarouselTitle>
                     <Carousel>
                        <div>
                           <Slider {...settings}>
                              {restaurants.map((restaurant)=>(
                                 <ImageCard key={restaurant.place_id} photoUrl={restaurant.photos? restaurant.photos[0].getUrl(): photoDefault} title={restaurant.name}></ImageCard>
                              ))}
                        </Slider>
                        </div>
                     </Carousel>
                  </>
                  ): <Loader/> }
                  
               </Search>
               {restaurants.map((restaurant)=>(
               <RestaurantCard 
               key={restaurant.place_id} 
               restaurant={restaurant}
               onClick={()=> {
                  handleClickModal(restaurant.place_id)}}
               />
               ))}
            </Container>
            <Map query={query} placeId={placeId}></Map>
         </Wrapper>
         <Modal open={modalOpened} onClose={()=> setModalOpened(!modalOpened)}>
         {restaurantSelected? (
            <>
            <ModalTitle>{restaurantSelected?.name}</ModalTitle>
            <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
            <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
            <ModalContent>{restaurantSelected?.opening_hours?.open_now 
            ? "Aberto agora :-)"
            : "Nesse momento está fechado :-("}
            </ModalContent>
            </>
         ):(
            <>
               <Skeleton height="10px" width="10px"></Skeleton>
               <Skeleton height="10px" width="10px"></Skeleton>
               <Skeleton height="10px" width="10px"></Skeleton>
               <Skeleton height="10px" width="10px"></Skeleton>
            </>
         )}
         </Modal>
      </PageDefault>
   )
}

export default Home
