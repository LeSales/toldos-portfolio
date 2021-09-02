import styled from 'styled-components';

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
        <div>To do: Top Carousel</div>
    </Wrapper>
}

export default TopCarousel;