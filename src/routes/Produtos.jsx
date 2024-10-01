import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Exemplo de imagens para os carros
import teslaImg1 from '../../public/img/tesla-model-s/img1.png';
import teslaImg2 from '../../public/img/tesla-model-s/img2.png';
import teslaImg3 from '../../public/img/tesla-model-s/img3.jpg';

import nissanImg1 from '../../public/img/nissan-leaf/img1.png';
import nissanImg2 from '../../public/img/nissan-leaf/img2.png';
import nissanImg3 from '../../public/img/nissan-leaf/img3.webp';

import chevroletImg1 from '../../public/img/chenvrolet-bolt/img1.png';
import chevroletImg2 from '../../public/img/chenvrolet-bolt/img2.png';
import chevroletImg3 from '../../public/img/chenvrolet-bolt/img3.png';

import audiImg1 from '../../public/img/audi-etron/img1.png';
import audiImg2 from '../../public/img/audi-etron/img2.png';
import audiImg3 from '../../public/img/audi-etron/img3.png';

import bmwImg1 from '../../public/img/bmw-i3/img1.png';
import bmwImg2 from '../../public/img/bmw-i3/img2.png';
import bmwImg3 from '../../public/img/bmw-i3/img3.png';

import fordImg1 from '../../public/img/mustang-mach-e/img1.png';
import fordImg2 from '../../public/img/mustang-mach-e/img2.png';
import fordImg3 from '../../public/img/mustang-mach-e/img3.png';

import porscheImg1 from '../../public/img/porsche-taycan/img1.png';
import porscheImg2 from '../../public/img/porsche-taycan/img2.png';
import porscheImg3 from '../../public/img/porsche-taycan/img3.png';

import konaImg1 from '../../public/img/hyundai-kona/img1.png';
import konaImg2 from '../../public/img/hyundai-kona/img2.png';
import konaImg3 from '../../public/img/hyundai-kona/img3.png';

import bydImg1 from '../../public/img/byd-dolphin/img1.png';
import bydImg2 from '../../public/img/byd-dolphin/img2.png';
import bydImg3 from '../../public/img/byd-dolphin/img3.png';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const ProductCardContainer = styled.div`
    background-color: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 12px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }

    &:after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 5px;
        background-color: #4a90e2;
        transform: scaleX(0);
        transition: transform 0.3s ease;
    }

    &:hover:after {
        transform: scaleX(1);
    }
`;

const Title = styled.h1`
    text-align: center;
    margin: 20px 0;
    font-family: 'Arial', sans-serif;
    color: #4a90e2;
    font-size: 2rem;
`;

const ProductName = styled.h3`
    font-size: 1.6rem;
    margin: 10px 0;
    color: #4a90e2;
    font-weight: 600;
`;

const ProductDetails = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 10px 0;
`;

const ProductPrice = styled.p`
    font-size: 1.2rem;
    color: #4CAF50; /* Cor verde para o preço */
    font-weight: bold;
    margin: 10px 0;
`;

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 10px;
`;

const SlideImage = styled.img`
    width: 100%;
    border-radius: 8px;
`;

const NavigationButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 1;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }

    &:first-child {
        left: 10px;
    }

    &:last-child {
        right: 10px;
    }
`;

const ProductCard = ({ name, description, images, price }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    useEffect(() => {
        let interval;
        if (isHovering) {
            interval = setInterval(nextSlide, 1500);
        }
        return () => clearInterval(interval);
    }, [isHovering, images.length]);

    return (
        <ProductCardContainer
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <CarouselContainer>
                <SlideImage src={images[currentSlide]} alt={`Image of ${name}`} />
                <NavigationButton onClick={() => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)}>&lt;</NavigationButton>
                <NavigationButton onClick={nextSlide}>&gt;</NavigationButton>
            </CarouselContainer>
            <ProductName>{name}</ProductName>
            <ProductDetails>{description}</ProductDetails>
            <ProductPrice>{price}</ProductPrice> {/* Renderiza o preço aqui */}
        </ProductCardContainer>
    );
};

const Produtos = () => {
    const produtos = [
        {
            name: 'Tesla Model S',
            description: 'Um sedã elétrico de luxo com grande autonomia e desempenho impressionante.',
            images: [teslaImg1, teslaImg2, teslaImg3],
            price: 'R$800.000,00 + importação'
        },
        {
            name: 'Nissan Leaf',
            description: 'Um dos carros elétricos mais vendidos, ideal para uso urbano e com bom espaço interno.',
            images: [nissanImg1, nissanImg2, nissanImg3],
            price: 'R$290.000,00'
        },
        {
            name: 'Chevrolet Bolt',
            description: 'Um hatchback compacto que oferece uma excelente relação custo-benefício e autonomia.',
            images: [chevroletImg1, chevroletImg2, chevroletImg3],
            price: 'R$280.000,00'
        },
        {
            name: 'Audi e-tron',
            description: 'Um SUV elétrico de luxo com performance excepcional e tecnologia avançada.',
            images: [audiImg1, audiImg2, audiImg3],
            price: 'R$700.000,00'
        },
        {
            name: 'BMW i3',
            description: 'Um carro urbano que combina design inovador com eficiência elétrica.',
            images: [bmwImg1, bmwImg2, bmwImg3],
            price: 'R$130.000,00'
        },
        {
            name: 'Ford Mustang Mach-E',
            description: 'Um SUV elétrico que mantém a essência esportiva do Mustang, com tecnologia de ponta.',
            images: [fordImg1, fordImg2, fordImg3],
            price: 'R$480.000,00'
        },
        {
            name: 'Porsche Taycan',
            description: 'Um carro esportivo elétrico que oferece uma experiência de condução emocionante e rápida.',
            images: [porscheImg1, porscheImg2, porscheImg3],
            price: 'R$540.000,00'
        },
        {
            name: 'Hyundai Kona Electric',
            description: 'Um SUV compacto com bom espaço, tecnologia e autonomia para o dia a dia.',
            images: [konaImg1, konaImg2, konaImg3],
            price: 'R$190.000,00'
        },
        {
            name: 'BYD Dolphin',
            description: 'Com um design moderno e recursos tecnológicos, o Dolphin é ideal para a mobilidade urbana sustentável.',
            images: [bydImg1, bydImg2, bydImg3],
            price: 'R$150.000,00'
        }
    ];

    return (
        <>
            <Title>Produtos</Title>
            <Container>
                {produtos.map((produto, index) => (
                    <ProductCard
                        key={index}
                        name={produto.name}
                        description={produto.description}
                        images={produto.images}
                        price={produto.price} // Passa o preço como propriedade
                    />
                ))}
            </Container>
        </>
    );
};

export default Produtos;
