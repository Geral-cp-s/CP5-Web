import React from 'react';
import styled from 'styled-components';

// Imagens dos desenvolvedores
import gabrielImg from '../../public/img/integrantes/gabriel.png';
import guilhermeImg from '../../public/img/integrantes/guilherme.png';
import gustavoImg from '../../public/img/integrantes/gustavo.png';
import augustoImg from '../../public/img/integrantes/augusto.png';

const DevelopersContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px; /* Espaço entre os cards */
    padding: 20px;
`;

const DeveloperCard = styled.a`
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    text-align: center;
    padding: 20px;
    width: 200px; /* Largura do card */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

const DeveloperImage = styled.img`
    width: 100%; /* Ocupa toda a largura do card */
    border-radius: 200px; /* Bordas arredondadas para a imagem */
    height: 120px; /* Altura ajustada para as imagens */
    object-fit: contain; /* Para evitar corte e manter a proporção */
`;

const DeveloperName = styled.h3`
    color: #4a90e2;
    font-size: 1.5rem;
    margin: 10px 0 5px;
`;

const DeveloperLink = styled.p`
    font-size: 1rem;
    color: #4a90e2;
`;

const Developers = () => {
    const developers = [
        { name: 'Gabriel Vasquez', image: gabrielImg, link: 'https://example.com/gabriel' },
        { name: 'Guilherme Araujo', image: guilhermeImg, link: 'https://example.com/guilherme' },
        { name: 'Gustavo Oliveira', image: gustavoImg, link: 'https://example.com/gustavo' },
        { name: 'Augusto Mendonça', image: augustoImg, link: 'https://example.com/augusto' },
    ];

    return (
        <DevelopersContainer>
            {developers.map((developer, index) => (
                <DeveloperCard key={index} href={developer.link} target="_blank" rel="noopener noreferrer">
                    <DeveloperImage src={developer.image} alt={developer.name} />
                    <DeveloperName>{developer.name}</DeveloperName>
                    <DeveloperLink>Acesse o perfil</DeveloperLink>
                </DeveloperCard>
            ))}
        </DevelopersContainer>
    );
};

export default Developers;
