import React from 'react'

function Home(){
    return(
        <div className="jumbotron">
            <h1 className="display-3">Ola</h1>
            <p className="lead">
            Seja bem vindo ao Sistema de Cadastro de Produtos</p>
            <hr className="my-4"/>  
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="/cadastroProdutos" role="button">Cadastrar</a>
            </p>
        </div>
    )
}

export default Home;