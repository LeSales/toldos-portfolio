import styled from 'styled-components';

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.div`
    ${flexCenter}
    background-color: #cecece;
    height: 50vh;

    .image-gallery{}
   
`;

const images = [
    {
        original: '/1.jpg'
    },
    {
        original: '/2.jpg'
    },
    {
        original: '/3.jpg'
    }
];

function TopCarousel() {
    return <Wrapper>
        to do: top carousel
    </Wrapper>
}

export default TopCarousel;