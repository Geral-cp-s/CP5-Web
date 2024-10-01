import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Importando a fonte Roboto do Google Fonts
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    body {
        font-family: 'Roboto', sans-serif; /* Aplicando a fonte a todo o corpo */
        margin: 0;
        padding: 0;
    }
`;

// Estilização usando styled-components
const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0; /* Cor de fundo */
`;

const ContainerLogin = styled.div`
    background-color: #fff; /* Cor de fundo do formulário */
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 400px; /* Largura do formulário */
`;

const Title = styled.span`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    display: block;
    text-align: center; /* Centraliza o título */
`;

const InputWrapper = styled.div`
    margin-bottom: 20px;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
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

const UtilsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 20px;
    text-align: center;
`;

const UtilsItem = styled.li`
    margin-bottom: 10px;
`;

const Text = styled.span`
    font-size: 14px;
`;

const Login = () => {
    const usuario = useRef();
    const senha = useRef();
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();

    function validar() {
        for (let i = 0; i < usuarios.length; i++) {
            if (
                usuarios[i].usuario === usuario.current.value &&
                usuarios[i].senha === senha.current.value
            )
                return true;
        }
        return false; // Adicionando retorno padrão para a função
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validar()) {
            let token =
                Math.random().toString(16).substring(2) +
                Math.random().toString(16).substring(2);
            sessionStorage.setItem("usuario", usuario.current.value);
            sessionStorage.setItem("senha", token);
            navigate("/cadprodutos");
        } else {
            alert("Usuário/senha inválidos");
        }
    };

    useEffect(() => {
        fetch("http://localhost:5000/usuarios")
            .then((res) => res.json())
            .then((res) => {
                setUsuarios(res);
            });
    }, []);

    return (
        <>
            <GlobalStyle /> {/* Aplicando os estilos globais */}
            <Container>
                <ContainerLogin>
                    <Title>Faça seu Login</Title>
                    <form onSubmit={handleSubmit}>
                        <InputWrapper>
                            <Input
                                type="text"
                                ref={usuario}
                                placeholder="Usuário"
                            />
                        </InputWrapper>
                        <InputWrapper>
                            <Input
                                type="password"
                                ref={senha}
                                placeholder="Senha"
                            />
                        </InputWrapper>
                        <Button type="submit">Login</Button>
                        <UtilsList>
                            <UtilsItem>
                                <Text>Esqueceu sua senha?</Text>
                            </UtilsItem>
                            <UtilsItem>
                                <Text>Não possui Conta?</Text>
                                <Link to="/cadUsuarios">Criar</Link>
                            </UtilsItem>
                        </UtilsList>
                    </form>
                </ContainerLogin>
            </Container>
        </>
    );
};

export default Login;
