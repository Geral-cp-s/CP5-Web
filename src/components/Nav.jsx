import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Adicione a importação da fonte Roboto no seu HTML (no index.html, por exemplo):

const NavContainer = styled.nav`
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #ffffff; /* Cor de fundo mais clara */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Sombra mais suave */
    border-radius: 8px; /* Bordas arredondadas */
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */
`;

const StyledLink = styled(Link)`
    color: #4a90e2; /* Cor do link */
    text-decoration: none;
    margin: 0 15px;
    font-size: 18px; /* Tamanho da fonte */
    font-weight: 500; /* Peso da fonte */
    transition: color 0.3s ease, transform 0.3s ease, text-shadow 0.3s ease; /* Transições suaves */

    &:hover {
        color: #2c3e50; /* Mudança de cor no hover */
        transform: scale(1.05); /* Leve aumento no tamanho ao passar o mouse */
        text-decoration: underline; /* Sublinhado no hover */
        text-shadow: 0 0 5px rgba(44, 62, 80, 0.5); /* Sombra de texto no hover */
    }
`;

const Nav = () => {
    return (
        <NavContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/produtos">Produtos</StyledLink>
            <StyledLink to="/sobre">Sobre</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
        </NavContainer>
    );
};

export default Nav;
