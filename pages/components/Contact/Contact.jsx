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
    background-color: #6866ec;
`;

function Contact(){
    return <Wrapper>
        <div>To do: Contact and form</div>
    </Wrapper>
}

export default Contact;