import styled from "styled-components";

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.header`
    ${flexCenter}
    height: 15vh;
    width: 100vw;
    background-color: #aabbcc;
`;

function Header(){
    return <Wrapper>
        <div>To do: Header</div>
    </Wrapper>
}

export default Header;