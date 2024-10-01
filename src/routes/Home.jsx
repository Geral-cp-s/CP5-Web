import { useEffect, useState } from 'react';
import styled from 'styled-components';
import img1 from '../../public/img/byd-dolphin/img1.png';
import img2 from '../../public/img/hyundai-kona/img1.png';
import img3 from '../../public/img/mustang-mach-e/img1.png';

// Importando as imagens dos carros
import teslaImg1 from '../../public/img/tesla-model-s/img1.png';
import teslaImg2 from '../../public/img/tesla-model-s/img2.png';
import teslaImg3 from '../../public/img/tesla-model-s/img3.jpg';

import nissanImg1 from '../../public/img/nissan-leaf/img1.png';
import nissanImg2 from '../../public/img/nissan-leaf/img2.png';
import nissanImg3 from '../../public/img/nissan-leaf/img3.webp';

import chevroletImg1 from '../../public/img/chenvrolet-bolt/img1.png';
import chevroletImg2 from '../../public/img/chenvrolet-bolt/img2.png';
import chevroletImg3 from '../../public/img/chenvrolet-bolt/img3.png';

import ProductCard from '../components/ProductCard'; 

const Title = styled.h1`
    color: #4a90e2;
    font-size: 2.8rem; /* Aumentando o tamanho da fonte */
    text-align: center;
    margin: 40px 0 20px;
    font-family: 'Roboto', sans-serif; /* Usando a fonte Roboto */
`;

const SlideshowContainer = styled.div`
    position: relative;
    width: 60%; /* Diminuindo a largura do slideshow */
    margin: 20px auto; /* Centralizando com margem */
    overflow: hidden;
    border-radius: 12px; /* Bordas arredondadas */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2); /* Sombra mais forte */
`;

const Slide = styled.div`
    display: none; /* Esconde por padrão */
    &.active {
        display: block; /* Mostra quando ativo */
    }
    transition: opacity 0.5s ease;
`;

const SlideImage = styled.img`
    width: 100%; /* Alterando para 100% da largura */
    border-radius: 12px; /* Bordas arredondadas */
`;

const NavigationButton = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(255, 255, 255, 0.8);
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    z-index: 1;
    border-radius: 50%; /* Botões circulares */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); /* Sombra nos botões */

    &:hover {
        background-color: rgba(255, 255, 255, 1);
        transform: scale(1.1); /* Aumento leve no hover */
    }

    &:first-child {
        left: 10px;
    }

    &:last-child {
        right: 10px;
    }
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #555;
    text-align: center;
    margin: 20px auto;
    max-width: 800px; /* Aumentando a largura máxima */
    line-height: 1.6; /* Melhoria na legibilidade */
    font-family: 'Roboto', sans-serif; /* Usando a fonte Roboto */
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
`;

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [img1, img2, img3];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        alert('Bem-vindo à Nossa Loja! Explore nossos produtos!');
    }, []); // O alerta será exibido apenas uma vez quando o componente for montado

    // Lista de produtos a serem exibidos
    const produtosExternos = [
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
        }
    ];

    return (
        <>
            <Title>Bem-vindo à Nossa Loja</Title>
            <SlideshowContainer>
                {slides.map((slide, index) => (
                    <Slide key={index} className={index === currentSlide ? 'active' : ''}>
                        <SlideImage src={slide} alt={`Slide ${index + 1}`} />
                    </Slide>
                ))}
                <NavigationButton onClick={prevSlide}>&lt;</NavigationButton>
                <NavigationButton onClick={nextSlide}>&gt;</NavigationButton>
            </SlideshowContainer>
            <Description>
                Aqui você encontrará os melhores carros elétricos do mercado. Explore nossa seleção e aproveite os nossos produtos!
            </Description>
            <CardsContainer>
                {produtosExternos.map((produto, index) => (
                    <ProductCard
                        key={index}
                        name={produto.name}
                        description={produto.description}
                        images={produto.images}
                        price={produto.price} // Passa o preço como propriedade
                    />
                ))}
            </CardsContainer>
        </>
    );
};

export default Home;
