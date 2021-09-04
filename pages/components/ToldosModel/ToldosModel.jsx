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
    background-color: #ec6666;
`;

function ToldosModel(){
    return <Wrapper className="products">
        <div>To do: Toldos Model carousel</div>
    </Wrapper>
}

export default ToldosModel;