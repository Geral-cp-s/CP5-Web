import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ImCancelCircle } from "react-icons/im";
import styled from 'styled-components';

// Estilização dos componentes
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    background-color: #f8f9fa;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: #343a40;
    font-weight: 700; /* Usando um peso mais forte para o título */
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`;

const Input = styled.input`
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #80bdff;
        outline: none;
    }
`;

const Textarea = styled.textarea`
    margin-bottom: 15px;
    padding: 12px;
    border: 1px solid #ced4da;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */
    transition: border-color 0.3s ease;

    &:focus {
        border-color: #80bdff;
        outline: none;
    }
`;

const Button = styled.button`
    padding: 12px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #218838;
    }

    &:active {
        background-color: #1e7e34;
    }
`;

const CancelLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    color: #dc3545;
    text-decoration: none;
    font-size: 16px;
    font-family: 'Roboto', sans-serif; /* Definindo a fonte */

    &:hover {
        color: #c82333;
        text-decoration: underline;
    }

    svg {
        margin-right: 5px;
    }
`;

const CadProdutos = () => {
    let { id } = useParams();
    const [produto, setProduto] = useState({
        id,
        nome: '',
        preco: '',
        descricao: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduto({ ...produto, [e.target.name]: e.target.value });
    };

    let metodo = id ? "put" : "post";

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = id ? `http://localhost:5000/produtos/${id}` : `http://localhost:5000/produtos`;

        fetch(url, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(produto),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            navigate("/listarProdutos");
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
        });
    };

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5000/produtos/${id}`)
                .then((response) => response.json())
                .then((data) => setProduto(data))
                .catch((error) => console.error('Error fetching the product:', error));
        }
    }, [id]);

    return (
        <Section>
            <Title>Cadastro de Produtos</Title>
            <Form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="nome"
                    value={produto.nome}
                    placeholder="Digite o nome do produto"
                    onChange={handleChange}
                    required
                />
                <Input
                    type="number"
                    name="preco"
                    value={produto.preco}
                    placeholder="Digite o preço do produto"
                    onChange={handleChange}
                    required
                />
                <Textarea
                    name="descricao"
                    value={produto.descricao}
                    placeholder="Digite a descrição do produto"
                    onChange={handleChange}
                    required
                />
                <Button type="submit">Cadastrar</Button>
                <CancelLink to="/listarProdutos">
                    <ImCancelCircle /> Cancelar
                </CancelLink>
            </Form>
        </Section>
    );
};

export default CadProdutos;
