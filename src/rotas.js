import React from 'react'

import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './views/home'
import CadastrarProduto from './views/produtos/cadastro'
import ConsultaProdutos from './views/produtos/consulta'

let rot = () => {
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/cadastroProdutos" component={CadastrarProduto}/>
                <Route exact path="/consultaProdutos" component={ConsultaProdutos}/>
                <Route exact path="/" component={Home}/>
            </Switch>
        </HashRouter>
    )
}

export default rot