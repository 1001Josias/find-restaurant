import styled from 'styled-components'
import Slick from 'react-slick'

const Wrapper = styled.div`
   display: flex;
`

const Container = styled.aside`
   color: pink;
   background-color: ${(props)=> props.theme.colors.background};
   height: 100vh;
   width: 360px;
   overflow-y: auto;
`

const Map = styled.div`
   width: 1006px;
   height: 100vh;
   background-color: ${(props) => props.theme.colors.primary};
`

const Logo = styled.header`
   align-items: center;
   padding-bottom: 30px;
   padding-top: 30px;
   font-size: 25px;
   font-family: Arial, Helvetica, sans-serif;
   color: ${(props)=> props.theme.colors.primary};
   /* background-color: ${(props)=> props.theme.colors.background}; */
`

const Search = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: center;
   /* align-items: center; */
   background-color: white;
`

const IconStyle = styled.div`
   color: ${(props)=> props.theme.colors.primary};
`

const CarouselTitle = styled.h1`
   font-family: ${(props)=> props.theme.fonts.regular};
   color: ${(props)=> props.theme.colors.text};
   font-size: 24px;
   font-weight: bold;
   line-height: 29px;
   margin: 26px 0;
`

const Carousel = styled(Slick)`
   .slick-slide{
      margin-right: 10px;
   }
`

const ModalTitle = styled.p`
   margin-bottom: 10px;
   letter-spacing: 0.11px;
   font-family: ${({theme})=> theme.fonts.regular};
   color: ${({theme})=> theme.colors.primary};
   text-transform: none;
   line-height: 29px;
   font-size: 24px;
   font-weight: bold;
`

const ModalContent = styled(ModalTitle)`
   font-size: 12px;
   color: black;   
`

export default Container

export {Search, Logo, IconStyle, Wrapper, Map, CarouselTitle, Carousel, ModalTitle, ModalContent}