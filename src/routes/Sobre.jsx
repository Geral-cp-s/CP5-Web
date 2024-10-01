import styled from 'styled-components';
import Developers from '../components/Developers';

// Adicione a importação da fonte Roboto no seu HTML (no index.html, por exemplo):
// <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">

const Container = styled.div`
    padding: 30px;
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
    background: #ffffff; /* Fundo branco */
    border-radius: 12px; /* Bordas arredondadas */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); /* Sombra suave */
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */
`;

const Title = styled.h1`
    font-size: 2.8rem; /* Tamanho maior */
    color: #4a90e2;
    margin-bottom: 20px;
    font-weight: 700; /* Negrito */
`;

const Description = styled.p`
    font-size: 1.2rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 30px;
    font-weight: 400; /* Normal */
`;

const Highlights = styled.ul`
    list-style-type: none;
    padding: 0;

    li {
        background: #f8f9fa; /* Fundo claro */
        border: 1px solid #e1e1e1; /* Borda clara */
        border-radius: 8px;
        padding: 20px; /* Aumentando o padding */
        margin: 10px 0;
        transition: background-color 0.3s, border-color 0.3s; /* Transição suave */
        
        &:hover {
            background-color: #e1f5fe; /* Azul claro ao passar o mouse */
            border-color: #90caf9; /* Mudança de cor na borda */
        }
        
        strong {
            color: #4a90e2; /* Cor do texto em negrito */
        }
    }
`;

const Sobre = () => {
    return (
        <Container>
            <Title>Sobre Nós</Title>
            <Description>
                Bem-vindo à nossa página! Somos uma equipe dedicada a carros elétricos que fazem a diferença. 
                Nossa missão é transformar o mundo em um ambiente mais verde, sempre com um foco no usuário e em suas necessidades. 
                Acreditamos que nossos veículos devem ser um aliado para todos, e trabalhamos incansavelmente para garantir que nossos serviços sejam intuitivos e de fácil acesso.
            </Description>
            <Highlights>
                <li>
                    <strong>Missão:</strong> Oferecer veículos que melhoram a vida das pessoas e do ambiente.
                </li>
                <li>
                    <strong>Visão:</strong> Ser a referência em qualidade e excelência na venda de carros elétricos, contribuindo para um futuro mais conectado e sustentável.
                </li>
                <li>
                    <strong>Valores:</strong> Nossos pilares são a Integridade, a Transparência e a Responsabilidade. Acreditamos em construir relacionamentos baseados na confiança e no respeito mútuo.
                </li>
            </Highlights>

            <Developers />
        </Container>
    );
};

export default Sobre;
