import styled from 'styled-components';

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.div`
    ${flexCenter}
    height: 40vh;
    color: #FFF;
    background-color: #404040;
`;

function Highlights(){
    return <Wrapper className="about">
        <div>To do: Highlights carousel</div>
    </Wrapper>
}

export default Highlights;