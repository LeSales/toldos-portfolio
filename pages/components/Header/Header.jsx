import styled from "styled-components";

const flexCenter = `
display: flex;
justify-content: center;
align-items: center;
`;

function Header() {
  return (
    <Wrapper className="home">
      <Logo>Logo</Logo>
      <Menu></Menu>
    </Wrapper>
  );
}

function Menu() {
  return (
    <Navigation>
      <ul>
        <li>
          <a
            href="/"
            onClick={(e) => {
              let home = document.querySelector(".home");
              e.preventDefault();
              home && home.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/"
            onClick={(e) => {
              let home = document.querySelector(".about");
              e.preventDefault();
              home && home.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Sobre
          </a>
        </li><li>
          <a
            href="/"
            onClick={(e) => {
              let home = document.querySelector(".products");
              e.preventDefault();
              home && home.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Produtos
          </a>
        </li><li>
          <a
            href="/"
            onClick={(e) => {
              let home = document.querySelector(".contact");
              e.preventDefault();
              home && home.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contato
          </a>
        </li>
      </ul>
    </Navigation>
  );
}

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: row;
  height: 15vh;
  width: 100vw;
  background-color: #aabbcc;
`;

export const Logo = styled.div`
  ${flexCenter}
  height: 10vh;
  width: 10vh;
  background-color: black;
  color: white;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    text-decoration: none;
    list-style: none;

    li {
      font-size: 2rem;
      padding: 0 1rem;

      a {
        text-decoration: none;

        :visited {
          color: inherit;
        }
      }
    }
  }
`;

export default Header;
