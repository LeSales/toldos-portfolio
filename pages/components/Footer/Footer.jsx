import styled from 'styled-components';

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

export const Wrapper = styled.footer`
    ${flexCenter}
    height: 20vh;
    color: #FFF;
    background-color: #37373b;
`;

function Footer(){
    return <Wrapper>
        <div>To do: Footer</div>
    </Wrapper>
}

export default Footer;