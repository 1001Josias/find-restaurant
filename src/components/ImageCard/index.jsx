import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Skeleton from '../Skeleton'

const Card = styled.div`
   text-align: center;
   width: 90px;
   height: 90px;
   border-radius:6px;
   background-image: url(${({ photoUrl }) => photoUrl});
   background-size: cover;
`

const Title = styled.span`
   font-family: ${({ theme }) => theme.fonts.regular};
   color: white;
   font-weight: bold;
   font-size: 16px;
`

const ImageCard = ({ photoUrl, title }) => {
   const [imageLoaded, setImageLoaded] = useState(false)

   useEffect(() => {
      const imageLoader = new Image()
      imageLoader.src = photoUrl
      imageLoader.onload = () => setImageLoaded(true)
   }, [photoUrl])

   return (
      <>
         {imageLoaded ?( 
         <Card photoUrl={photoUrl}>
            <Title>{title}</Title>
         </Card>
         ) : (
            <Skeleton width="90px" height="90px"/>
         )}
      </>
   )
}

export default ImageCard