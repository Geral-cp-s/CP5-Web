import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";


const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f8f9fa; /* Light background */
    color: #333; /* Text color */
    position: relative;
    bottom: 0;
    width: 100%;
`;

const FooterText = styled.h5`
    margin: 0;
    font-size: 1rem;
    text-align: center;
    color: #4a90e2;
`;

const SocialIconsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px; /* Space between icons */
    margin-top: 10px;
`;

const IconLink = styled.a`
    color: #4a90e2; /* Icon color */
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
        color: #0073e6; /* Change color on hover */
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterText>@2024 - Todos os direitos reservados</FooterText>
            <SocialIconsContainer>
                <IconLink href="#" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </IconLink>
            </SocialIconsContainer>
        </FooterContainer>
    );
};

export default Footer;
