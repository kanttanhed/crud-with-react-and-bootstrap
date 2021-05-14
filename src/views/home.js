import React from 'react'

import{ Link } from 'react-router-dom'

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Ola</h1>
            <p className="lead">
            Seja bem vindo ao Sistema de Cadastro de Produtos</p>
            <hr className="my-4"/>  
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/cadastroProdutos" role="button">Cadastrar</Link >
            </p>
        </div>
    )
}

export default Home;