import styled from 'styled-components'

const Card = styled.div`
   display: flex;
   justify-content: space-between;
   cursor: pointer; 
   margin-top: 5px;
   padding: 16px;
   background-color: white;
   border-left: 5px solid transparent;
   :hover{
      background-color: ${({theme})=> theme.colors.background};
      border-left-color: ${({theme})=> theme.colors.primary};
   }
`

const RestaurantInfo = styled.div`
   display: flex;
   flex-direction: column;
   color: black;
   font-family: ${({theme})=> theme.fonts.regular};
`

const Title = styled.span`
   font-family: ${({theme})=> theme.fonts.regular};
   color: ${({theme})=> theme.colors.text};
   font-size: 18px;
   font-weight: bold;
   line-height: 29px;
   max-width: 200px;
`

const Address = styled.span`
   font-family: ${({theme})=> theme.fonts.regular};
   color: ${({theme})=> theme.colors.text};
   line-height: 15px;
   font-size: 16px;
   margin-top: 10px;
   margin-bottom: 10px;
   max-width: 200px;
`

const RestaurantImage = styled.img`
   display: ${({imageLoaded})=> (imageLoaded? 'block' : 'none')};
   width: 100px;
   height: 100px;
   object-fit:cover;
   border-radius: 6px;
`

export default Card

export {RestaurantInfo, Title, Address, RestaurantImage}