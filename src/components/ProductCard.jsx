// ProductCard.js
import React, { useState } from 'react';
import styled from 'styled-components';

const ProductCardContainer = styled.div`
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    padding: 15px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    width: 240px; /* Largura do card */
    height: 400px; /* Aumentar a altura do card para dar mais espaço */
    margin: 10px; 

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
`;

const ProductName = styled.h3`
    font-size: 1.4rem;
    color: #4a90e2;
    margin: 10px 0;
`;

const ProductDetails = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 5px 0; 
    height: 60px; /* Limitar a altura do texto */
    overflow: hidden; /* Ocultar o texto que exceder a altura */
`;

const ProductPrice = styled.p`
    font-size: 1.1rem;
    color: #4caf50;
    font-weight: bold;
    margin-top: 10px;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 200px; /* Altura da imagem - ajuste se necessário */
    overflow: hidden; 
    border-radius: 8px; 
`;

const SlideImage = styled.img`
    width: 100%;
    height: auto; /* Altura automática para manter a proporção */
    max-height: 100%; /* Garante que a imagem não ultrapasse o contêiner */
    object-fit: contain; /* Mantém a imagem dentro do contêiner sem cortar */
    transition: transform 0.5s ease;

    &:hover {
        transform: scale(1.05); 
    }
`;

const ProductCard = ({ name, description, images, price }) => {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    return (
        <ProductCardContainer onClick={nextImage}>
            <ImageContainer>
                <SlideImage src={images[currentImage]} alt={name} />
            </ImageContainer>
            <ProductName>{name}</ProductName>
            <ProductDetails>{description}</ProductDetails>
            <ProductPrice>{price}</ProductPrice>
        </ProductCardContainer>
    );
};

export default ProductCard;
