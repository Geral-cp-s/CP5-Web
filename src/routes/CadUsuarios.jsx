import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import styled, { createGlobalStyle } from 'styled-components';

// Estilos globais
const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto', sans-serif; /* Usando a fonte Roboto */
        margin: 0;
        padding: 0;
        background-color: #f0f0f0; /* Cor de fundo */
    }
`;

const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const FormContainer = styled.div`
    background-color: #fff; /* Cor de fundo do formulário */
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 400px; /* Largura do formulário */
`;

const Title = styled.h1`
    text-align: center; /* Centraliza o título */
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
        border-color: #007BFF; /* Cor ao focar no input */
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #007BFF; /* Cor do botão */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3; /* Cor ao passar o mouse */
    }
`;

const CancelLink = styled(Link)`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    color: #dc3545; /* Cor do ícone de cancelamento */
    font-size: 24px;
    text-decoration: none;
`;

const CadUsuarios = () => {
    let { id } = useParams();
    const [usuarios, setUsuarios] = useState({
        id,
        usuario: '',
        senha: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setUsuarios({ ...usuarios, [e.target.name]: e.target.value });
    }

    let metodo = "post";
    if (id) {
        metodo = 'put';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:5000/usuarios/${id ? id : ''}`, {
            method: metodo,
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(usuarios),
        }).then(() => {
            navigate("/login");
        });
    }

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/usuarios/${id}`)
                .then((resp) => {
                    return resp.json();
                })
                .then((data) => {
                    setUsuarios(data);
                });
        }
    }, []);

    return (
        <>
            <GlobalStyle />
            <Container>
                <FormContainer>
                    <Title>Cadastro de Usuários</Title>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text"
                            name="usuario"
                            value={usuarios.usuario}
                            placeholder="Digite seu Usuário"
                            onChange={handleChange}
                        />
                        <Input
                            type="password"
                            name="senha"
                            value={usuarios.senha}
                            placeholder="Digite sua senha"
                            onChange={handleChange}
                        />
                        <Button type="submit">Cadastrar</Button>
                        <CancelLink to="/listarUsuarios">
                            <ImCancelCircle />
                        </CancelLink>
                    </form>
                </FormContainer>
            </Container>
        </>
    );
}

export default CadUsuarios;
