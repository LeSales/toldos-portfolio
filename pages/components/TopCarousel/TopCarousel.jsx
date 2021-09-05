import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.div`
    ${flexCenter}
    background-color: #cecece;
    height: 70vh;

   
`;

function TopCarousel() {
    return <Wrapper>
        <Carousel centerMode >
            <div className="carousel">
                <img src="/1.jpg"></img>
            </div>
            <div className="carousel">
                <img src="/2.jpg"></img>
            </div>
            <div className="carousel">
                <img src="/3.jpg"></img>
            </div>
        </Carousel>
    </Wrapper>
}

export default TopCarousel;