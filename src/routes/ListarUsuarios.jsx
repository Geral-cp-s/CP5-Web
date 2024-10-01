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
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const ActionLinks = styled.div`
    margin-bottom: 20px;

    a {
        margin-right: 15px;
        text-decoration: none;
        color: #007BFF; /* Cor do link */
        font-weight: bold;
        transition: color 0.3s, text-shadow 0.3s, transform 0.3s; /* Adicionando transformação */
        
        /* Efeito hover */
        &:hover {
            color: #0056b3; /* Cor ao passar o mouse */
            text-shadow: 0 0 10px rgba(0, 123, 255, 0.5); /* Sombra mais intensa ao passar o mouse */
            transform: scale(1.05); /* Aumenta levemente o tamanho do link */
        }
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    background-color: #fff; /* Cor de fundo da tabela */
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
    padding: 10px;
    background-color: #007BFF; /* Cor do cabeçalho da tabela */
    color: white;
    text-align: left;
`;

const TableData = styled.td`
    padding: 10px;
    border: 1px solid #ccc; /* Bordas das células */
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    color: #dc3545; /* Cor do ícone de exclusão */

    &:hover {
        color: #c82333; /* Cor ao passar o mouse */
    }
`;

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/usuarios/${id}`, {
            method: 'delete',
        })
            .then(() => {
                window.location = '/listarUsuarios';
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetch('http://localhost:5000/usuarios/')
            .then((resp) => {
                return resp.json();
            })
            .then((resp) => {
                setUsuarios(resp);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            <GlobalStyle />
            <Container>
                <Title>Lista Usuários</Title>
                <ActionLinks>
                    <Link to="/cadUsuarios">Inserir Novo Usuário</Link>
                    <Link to="/login">Voltar</Link>
                </ActionLinks>
                <Table>
                    <thead>
                        <tr>
                            <TableHeader>Usuário</TableHeader>
                            <TableHeader>Senha</TableHeader>
                            <TableHeader>Ações</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((item) => (
                            <tr key={item.id}>
                                <TableData>{item.usuario}</TableData>
                                <TableData>{item.senha}</TableData>
                                <TableData>
                                    <Link to={`/editarUsuarios/${item.id}`}>
                                        <FaEdit />
                                    </Link>
                                    <ActionButton onClick={() => handleDelete(item.id)}>
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
}

export default ListarUsuarios;
