import styled from 'styled-components'
import Header from './components/Header';
import Highlights from './components/Highlights';
import TopCarousel from './components/TopCarousel';
import ToldosModel from './components/ToldosModel';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Wrapper = styled.div`
background-color: #FFeebb;
`;

export default function Home() {
  return <Wrapper>
    <Header></Header>
    <TopCarousel></TopCarousel>
    <Highlights></Highlights>
    <ToldosModel></ToldosModel>
    <Contact></Contact>
    <Footer></Footer>
  </Wrapper>
}
