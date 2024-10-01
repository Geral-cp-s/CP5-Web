import React from 'react';
import styled, { keyframes } from 'styled-components';

// Importe uma imagem de erro que você deseja usar
import errorImage from '../../public/img/error.png';

// Animação para o carregamento
const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const ErrorContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Preenche a altura total da tela */
    background-color: #eef2f3; /* Fundo suave */
`;

const ErrorCard = styled.div`
    background-color: #ffffff; /* Fundo branco do card */
    border-radius: 10px; /* Bordas arredondadas */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 20px; /* Padding reduzido */
    max-width: 350px; /* Largura máxima do card */
    width: 80%; /* Largura do card em porcentagem */
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza itens horizontalmente */
    justify-content: center; /* Centraliza itens verticalmente */
    border: 2px solid #3498db; /* Borda azul ao redor do card */
`;

const ErrorImage = styled.img`
    width: 100%; /* Ajusta a largura para ocupar todo o card */
    max-width: 200px; /* Largura máxima da imagem */
    margin-bottom: 15px; /* Espaço reduzido entre a imagem e o carregador */
    border-radius: 8px; /* Bordas arredondadas para a imagem */
`;

const ErrorMessage = styled.h1`
    font-size: 1.5rem; /* Tamanho da fonte reduzido */
    color: #e74c3c; /* Vermelho mais escuro */
    margin-bottom: 5px; /* Espaço reduzido */
    font-family: 'Arial', sans-serif; /* Alterar a fonte */
    font-weight: bold; /* Fonte em negrito */
`;

const ErrorDescription = styled.p`
    font-size: 0.9rem; /* Tamanho da fonte reduzido */
    color: #34495e; /* Cinza escuro */
    margin-bottom: 15px; /* Espaço reduzido */
    line-height: 1.4; /* Aumenta o espaçamento entre linhas */
    font-family: 'Arial', sans-serif; /* Alterar a fonte */
`;

const HomeButton = styled.a`
    padding: 10px 20px; /* Tamanho do botão */
    font-size: 0.9rem; /* Tamanho da fonte */
    color: #fff; /* Texto branco */
    background-color: #3498db; /* Azul */
    border: none;
    border-radius: 4px; /* Bordas arredondadas */
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #2980b9; /* Azul mais escuro no hover */
        transform: translateY(-2px); /* Efeito de leve movimento */
    }
`;

const Loader = styled.div`
    border: 6px solid #f3f3f3; /* Cor da borda do carregador */
    border-top: 6px solid #3498db; /* Cor da parte superior */
    border-radius: 50%;
    width: 40px; /* Tamanho do carregador reduzido */
    height: 40px; /* Tamanho do carregador reduzido */
    animation: ${spin} 1s linear infinite; /* Animação de rotação */
    margin: 10px 0; /* Espaço reduzido entre a imagem de erro e o carregador */
`;

const Error = () => {
    return (
        <ErrorContainer>
            <ErrorCard>
                <ErrorImage src={errorImage} alt="Error 404" />
                <Loader />
                <ErrorMessage>404 - Página Não Encontrada</ErrorMessage>
                <ErrorDescription>
                    Desculpe, a página que você está procurando não existe. 
                    Tente verificar o URL ou voltar à página inicial.
                </ErrorDescription>
                <HomeButton href="/">Voltar para a Página Inicial</HomeButton>
            </ErrorCard>
        </ErrorContainer>
    );
};

export default Error;
