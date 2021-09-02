import styled from 'styled-components'
import Header from './components/Header';
import TopCarousel from './components/TopCarousel';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Wrapper = styled.body`
background-color: #FFeebb;
height: 100vh;
`;

export default function Home() {
  return <Wrapper>
    <Header></Header>
    <TopCarousel></TopCarousel>
  </Wrapper>
}
