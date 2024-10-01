import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';
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
    padding: 20px;
    max-width: 800px;
    margin: 50px auto;
    background-color: #fff; /* Fundo branco */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: #333; /* Cor do título */
`;

const LinkButton = styled(Link)`
    display: inline-block;
    margin-bottom: 20px;
    padding: 10px 15px;
    background-color: #007BFF; /* Cor do botão */
    color: white;
    border-radius: 5px;
    text-decoration: none;
    transition: background-color 0.3s;

    &:hover {
        background-color: #0056b3; /* Cor ao passar o mouse */
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
`;

const TableHeader = styled.th`
    background-color: #f8f9fa; /* Cor de fundo do cabeçalho */
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
`;

const TableData = styled.td`
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    color: #007BFF; /* Cor do ícone */
    cursor: pointer;

    &:hover {
        color: #0056b3; /* Cor ao passar o mouse */
    }
`;

const ListarProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/produtos/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setProdutos(produtos.filter(prod => prod.id !== id));
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetch('http://localhost:5000/produtos/')
            .then((resp) => resp.json())
            .then((data) => setProdutos(data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Lista de Produtos</Title>
                <LinkButton to="/cadProdutos">Inserir Novo Produto</LinkButton>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Nome</TableHeader>
                            <TableHeader>Preço</TableHeader>
                            <TableHeader>Descrição</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto) => (
                            <tr key={produto.id}>
                                <TableData>{produto.nome}</TableData>
                                <TableData>{produto.preco}</TableData>
                                <TableData>{produto.descricao}</TableData>
                                <TableData>
                                    <Link to={`/editarProdutos/${produto.id}`}>
                                        <ActionButton><FaEdit /></ActionButton>
                                    </Link>
                                    <ActionButton onClick={() => handleDelete(produto.id)}>
                                        <FaTrash />
                                    </ActionButton>
                                </TableData>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
        </>
    );
};

export default ListarProdutos;
